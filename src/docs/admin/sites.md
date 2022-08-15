# Site Management

> From the **Administration Area**, click on the **Sites** section from the sidebar navigation.

Multiple wiki sites can be hosted on the same Wiki.js instance. This allows you to clearly separate content belonging to different teams or products.

The following resources are tied to a site:

- Pages *(including history)*
- Comments
- Media Assets
- Site Configuration *(e.g. theme, locales, navigation, etc.)*

::: warning User Scope
Users reside at the global level and are **NOT** tied to a site. They can be allowed access to multiple sites at once. Use **Group Rules** to restrict a user access to one or more sites.
:::

## Requirements

- Each site requires a **dedicated hostname** (sub-domain or domain).
- The server cannot listen on multiple network interfaces for different sites. If you have such need, you must either use a reverse proxy (e.g. nginx) to handle traffic from different IPs or launch dedicated instances for each interface.

## Create a Site

Click on the **New Site** button. A dialog to create a new site will appear.

DIALOG_SCREEN_IMAGE

## Modify a Site



## Delete a Site

