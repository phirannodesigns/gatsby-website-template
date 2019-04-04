# Phiranno Designs Gatsby Website Template

This is a template to build a simple Gatsby website.

All the images are served using the [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/) and styling is done with Tailwind.

Fonts are hosted locally wherever possible using [Typefaces.js](https://github.com/KyleAMathews/typefaces).

Hosting, DNS and form handling are all done with Netlify.

## Getting started

To start with, open a private browsing tab and clone a copy of the repository and deploy it to Netlify using the following link:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/phirannodesigns/gatsby-template)

You will be prompted to log into GitHub, use the Phiranno Designs account.

Give the repository a new name, I usually make this the domain name for the website (e.g. `phirannodesigns.com.au`) and select **Save & Deploy**.

The site will immediately start to build.

Click the **Site Settings** button, scroll down to the **Change site name** and give the site a name that you will be able to remember, I usually make this a hyphenated version of the company name (e.g. `phiranno-designs`).

Scroll down to the deploy status badge section and copy the markdown link and paste in into the top of this README document.

At the top of the page there will be a link just under the navigation menu that says **Deploys from GitHub** click on this to go to the GitHub repository.

If the site hasn't finished it's initial build the repository may be still empty, if this is the case, once it has finished building refresh the page and everything should be there.

Transfer ownership to Phiranno Designs by going to GitHub, and from the repository that you just created, go to `Settings > Danger Zone` and select the **Transfer** button.

Type the name of the repository to confirm and then enter `phirannodesigns` under **New owner’s GitHub username or organization name**.

Go back to the **Code** tab of the repository and click on the green button that says **Clone or download**.

If you have the GitHub desktop app installed you can use the **Open in Desktop** button to clone the repo into your working directory. You can also use do this from your terminal, `cd` into your working directory and type the following command: `git clone https://github.com/phirannodesigns/gatsby-template.git`.

Open the repository in Visual Studio Code and run `npm install` from inside this directory to install all of the required node packages.

To spin up a development server, type `npm run start` and start working on the site.
