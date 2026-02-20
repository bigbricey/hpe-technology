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
  "get-nordvpn": "https://nordvpn.com",
  "get-protonvpn": "https://protonvpn.com",
  "get-surfshark": "https://surfshark.com",
  "getresponse": "https://www.getresponse.com",
  "hostinger": "https://www.hostinger.com",
  "hubspot": "https://www.hubspot.com",
  "liquid-web": "https://www.liquidweb.com",
  "mondaycom": "https://monday.com",
  "nordvpn": "https://nordvpn.com",
  "notion": "https://www.notion.so",
  "pipedrive": "https://www.pipedrive.com",
  "protonvpn": "https://protonvpn.com",
  "salesce": "https://www.salesforce.com",
  "semrush": "https://www.semrush.com",
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
