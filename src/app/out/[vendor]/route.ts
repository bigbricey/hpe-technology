import { redirect } from "next/navigation";

// Centralized Affiliate Link Dictionary
// The site owner will update these URLs with their actual affiliate hoplinks once approved.
const affiliateLinks: Record<string, string> = {
  "ahrefs": "https://ahrefs.com",
  "asana": "https://asana.com",
  "bluehost": "https://www.bluehost.com",
  "clickup": "https://clickup.com",
  "convertkit": "https://convertkit.com",
  "cyberghost": "https://www.cyberghostvpn.com",
  "expressvpn": "https://www.expressvpn.com",
  "freshsales": "https://www.freshworks.com/crm/sales/",
  "get-cyberghost": "https://www.cyberghostvpn.com",
  "get-expressvpn": "https://www.expressvpn.com",
  "get-hubspot": "https://www.hubspot.com",
  "get-nordvpn": "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=141397&url_id=902",
  "get-protonvpn": "https://protonvpn.com",
  "get-surfshark": "https://surfshark.com",
  "getresponse": "https://www.getresponse.com",
  "hostinger": "https://www.hostinger.com",
  "hubspot": "https://www.hubspot.com",
  "liquid-web": "https://liquidweb.i3f2.net/c/6743040/347826/4464",
  "mondaycom": "https://monday.com",
  "nordvpn": "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=141397&url_id=902",
  "notion": "https://www.notion.so",
  "pipedrive": "https://www.pipedrive.com",
  "protonvpn": "https://protonvpn.com",
  "salesce": "https://www.salesforce.com",
  "semrush": "https://www.semrush.com",
  "siteground": "https://www.siteground.com/index.htm?afcode=c2941fdd460cd06f2934da5b8b7dca28",
  "get-siteground": "https://www.siteground.com/index.htm?afcode=c2941fdd460cd06f2934da5b8b7dca28",
  "start-with-hubspot": "https://www.hubspot.com",
  "surfshark": "https://surfshark.com",
  "trello": "https://trello.com",
  "wp-engine": "https://wpengine.com",
  "zoho-crm": "https://www.zoho.com/crm/",
  // --- ClickBank Immediate Monetization Links ---
  "instadoodle": "https://1ttdtr5.INSTADOODL.hop.clickbank.net",
  "ai-master": "https://1ttdtr5.MRNNETWORK.hop.clickbank.net",
  "profit-vault": "https://1ttdtr5.WINNINGTIC.hop.clickbank.net",
  "app-reviews": "https://1ttdtr5.APPCOINER.hop.clickbank.net",
  "social-paid": "https://1ttdtr5.SOCIALPAID.hop.clickbank.net",
};

export async function GET(
  request: Request,
  props: { params: Promise<{ vendor: string }> }
) {
  const params = await props.params;
  const vendor = params.vendor.toLowerCase();

  // Look up the specific affiliate link or fall back to a generic search if unknown
  const destination = affiliateLinks[vendor];

  if (destination) {
    redirect(destination);
  } else {
    // Fallback: If we don't have a specific mapping, just route them to the homepage 
    // or try to guess the vendor domain conservatively.
    redirect(`https://${vendor.replace('get-', '')}.com`);
  }
}
