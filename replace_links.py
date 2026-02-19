import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text.strip('-')

def replace_links(directory):
    # Match ONLY anchor tags that have className="btn" or className="table-btn" to avoid internal navigation links
    a_tag_pattern = re.compile(r'(<a[^>]*className="(?:btn[^"]*|table-btn)"[^>]*>)(.*?)(</a>)', re.DOTALL | re.IGNORECASE)
    
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                original_content = content
                
                def repl(match):
                    opening_tag = match.group(1)
                    link_text = match.group(2).strip()
                    closing_tag = match.group(3)
                    
                    # Check if it has an href that leads with #
                    href_match = re.search(r'href="#([^"]*)"', opening_tag)
                    if not href_match:
                        return match.group(0) # Not a hash link
                        
                    target = href_match.group(1)
                    
                    # If it's a -visit placeholder, use the prefix
                    if target.endswith('-visit') and target != 'product-visit':
                        slug = target.replace('-visit', '')
                    else:
                        # Try to infer product from link text
                        clean_text = re.sub(r'<[^>]*>', '', link_text).strip()
                        clean_text = clean_text.replace('Get Started with', '').replace('Visit', '').replace('Try', '').replace('Free', '').replace('for', '').replace('Days', '').strip()
                        if not clean_text or clean_text.lower() in ['visit website', '7']:
                            slug = 'unknown-product'
                        else:
                            slug = slugify(clean_text)
                            # Handle clean_text="Semrush  7 " -> "semrush"
                            if slug.endswith('-7'): slug = slug[:-2]
                    
                    if not slug or slug == 'unknown-product':
                        return match.group(0)
                        
                    new_opening_tag = re.sub(r'href="#[^"]*"', f'href="/out/{slug}"', opening_tag)
                    return f"{new_opening_tag}{link_text}{closing_tag}"
                
                new_content = a_tag_pattern.sub(repl, content)
                
                if new_content != original_content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated links in {filepath}")

replace_links('src/app')
