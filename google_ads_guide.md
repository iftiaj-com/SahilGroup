# Google Ads Campaign Guide for Sahil Group

This guide outlines how to configure, launch, and manage a **$100 monthly test budget ($3.33 per day)** on Google Ads to target garments sourcing managers in Bangladesh and foreign importers, while preventing wasted ad spend.

---

## 1. Key Concepts: Ads vs. Auto-Suggestion API

Before setting up your campaigns, it is important to clarify how search suggestions work:
*   **Google Search Autocomplete (Organic Suggestion)**: Google does not sell organic autocomplete suggestions via an API. These appear naturally when a brand achieves high organic search volume and strong local SEO.
*   **Google Search Ads (Sponsored Suggestion)**: You can place a **Sponsored Ad** at the very top of Google search results (and in search dropdown recommendations on mobile/desktop browsers) when someone types "sahil", "garments Narayanganj", or similar keywords. This is done through a **Google Ads Search Campaign** and fits perfectly into your $100 budget.

---

## 2. Budget Allocation Strategy (Overall: $100 / Month)

With a small budget of **$3.33 per day**, you must segment your campaigns to target cheap local B2B clicks and higher-value international importer clicks.

| Campaign | Target Location | Target Audience | Daily Budget | Monthly Cost | Est. CPC |
|---|---|---|---|---|---|
| **Campaign 1: Brand & Local B2B** | Bangladesh | Local RMG Exporters, Merchandisers, Sourcing Managers | $1.00 / day | $30 / month | $0.05 – $0.15 |
| **Campaign 2: Global Sourcing** | USA, UK, Germany, Netherlands, France | Brand Owners, Sourcing Agents, Wholesalers | $2.33 / day | $70 / month | $0.50 – $1.20 |

> [!WARNING]
> Because B2B clicks in Western countries (US/EU) can be expensive, a small daily budget of $2.33 means you will get **2 to 5 highly targeted clicks per day**. Every single click must be highly qualified.

---

## 3. High-Intent Keyword Selection

Never use broad-match keywords like `garments` or `textile` by themselves. You will exhaust your entire $100 budget in a few minutes on retail shoppers looking to buy single T-shirts. Use **Phrase Match** (with quotes `"..."`) and **Exact Match** (with brackets `[...]`) instead.

### Keywords to Target (Add these to Google Ads)
*   **Brand Search (Protects your name):**
    *   `[sahil group]`
    *   `"sahil group bangladesh"`
    *   `"sahil garments"`
*   **High-Intent B2B Sourcing:**
    *   `"garment manufacturer in bangladesh"`
    *   `"knit fabric supplier narayanganj"`
    *   `"local B2B supplier knitting dyeing"`
    *   `"bulk knitwear manufacturer"`
    *   `"textile factory in bangladesh"`

### Negative Keywords (CRITICAL - Add these to prevent wasted spend)
Add these keywords as negatives so your ads **do not show** when people search for retail, jobs, or small quantities:
*   *Retail words:* `shop`, `buy single`, `retail`, `store`, `online shop`, `amazon`, `price of 1 t-shirt`
*   *Career words:* `jobs`, `salary`, `career`, `vacancy`, `recruitment`, `internship`
*   *Design/Student:* `course`, `tutorial`, `free templates`, `student project`

---

## 4. Step-by-Step Google Ads Setup Guide

### Step 1: Create a Google Ads Account
1. Go to [ads.google.com](https://ads.google.com/) and log in using your Google account.
2. **Important**: When starting, click **"Switch to Expert Mode"** at the bottom. Do not use the "Smart Campaign" wizard as it limits your control over match types and negative keywords.

### Step 2: Configure Conversion Tracking
Since Google Analytics is already placed on all your pages, link your Google Ads account to your Google Analytics 4 (GA4) property:
1. In Google Ads, go to **Tools and Settings** > **Measurement** > **Conversions**.
2. Click **New Conversion Action** > **Import** > Select **Google Analytics 4 properties** > **Web**.
3. Select your GA4 event (e.g. `form_submission` or page views of `contact.html`) to track when a sourcing manager submits a message.

### Step 3: Create the Campaigns
1. Click **+ New Campaign**.
2. Select **Create a campaign without a goal's guidance** > **Search** > Select **Website visits**.
3. **Campaign Settings**:
    *   **Networks**: **Uncheck** "Display Network" (this wastes B2B budgets on random mobile apps).
    *   **Locations**: 
        *   For *Campaign 1*, enter `Bangladesh`.
        *   For *Campaign 2*, enter `United States`, `United Kingdom`, `Germany`, `France`, `Netherlands`.
    *   **Languages**: `English`.
    *   **Budget**: Set to `$1.00` for Campaign 1 and `$2.33` for Campaign 2.
    *   **Bidding**: Select **Clicks** (Maximize Clicks) and set a **Maximum CPC limit** (e.g. `$0.20` for Bangladesh, `$1.50` for Global).

### Step 4: Write High-Converting B2B Ad Copy
Ensure your ads clearly tell retail shoppers that you only do wholesale B2B business. 

**Ad Example:**
*   **Headline 1**: Sahil Group Bangladesh
*   **Headline 2**: B2B Knitting & Dyeing Partner
*   **Headline 3**: Export-Quality RMG Supplier
*   **Description 1**: Vertical knit garment manufacturer in Narayanganj. Serving local RMG exporters and foreign importers. 12+ tons daily capacity.
*   **Description 2**: Specialized in circular knitting, azo-free dyeing, and premium finishing. Minimum order quantities apply. Get a quote today!

---

## 5. Reviewing Performance (End of 1-Month Test)

After 30 days, log in to check your metrics:
1.  **Search Terms Report**: Look at the exact phrases people typed. If you see retail terms (e.g., *"buy custom polo shirt 1 piece"*), add them immediately to your Negative Keywords list.
2.  **Click-Through Rate (CTR)**: Aim for a CTR above **3% to 5%** for search campaigns.
3.  **Conversions**: Check how many visitors filled out your contact form via Google Ads. Compare this to your $100 spend to calculate your **Cost Per Lead (CPL)**.
