[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nuxt](https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js)](https://nuxt.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-4AB7D6?logo=vue.js)](https://primevue.org)

# Digital Business Card

A modern, responsive digital business card built with Nuxt 3, Tailwind CSS 4, and PrimeVue 4. This application serves as a digital alternative to traditional business cards, allowing professionals to share their contact information and professional profile through a web interface.

## Demo

[Live Demo](https://lvizcaya.arpixnet.com) - Check out the live demo of this digital business card.

## Features

- ✅ **Professional Profile**: Display your name, title, photo, and professional information
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- 🌓 **Dark Mode Support**: Elegant dark theme for better viewing experience
- 🔗 **Social Media Integration**: Connect all your professional social profiles
- 📊 **Skills Showcase**: Highlight your professional skills with visual indicators
- 📅 **Meeting Scheduler**: Direct link to Calendly for easy appointment scheduling
- 📞 **Direct Contact**: One-click options to call, email, or message
- 📱 **Add to Contacts**: Generate and download vCard for easy contact saving
- 📤 **Share Functionality**: Native share capabilities for mobile devices
- 🔄 **Multilingual Support**: Available in English and Spanish with i18n
- 📱 **PWA Support**: Install as a Progressive Web App on mobile devices
- 🖼️ **QR Code Generation**: Share your digital card via QR code

## Technology Stack

- **Frontend Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework
- **UI Framework**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Component Library**: [PrimeVue 4](https://primevue.org/) - UI component suite
- **Internationalization**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - Multilingual support
- **Icons**: [@nuxt/icon](https://github.com/nuxt/icon) - Icon integration
- **Image Optimization**: [@nuxt/image](https://image.nuxtjs.org/) - Image processing
- **PWA Support**: [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app/) - Progressive Web App
- **QR Code Generation**: [@chenfengyuan/vue-qrcode](https://github.com/chenfengyuan/vue-qrcode)

## Installation

### Option 1: Using nuxi

You can create a new project based on this template using the `nuxi init` command:

```bash
# Using npx
npx nuxi init my-business-card -t github:arpixnet/digital-business-card

# Or using pnpm
pnpm dlx nuxi init my-business-card -t github:arpixnet/digital-business-card

# Or using yarn
yarn dlx nuxi init my-business-card -t github:arpixnet/digital-business-card

# Or using bun
bunx nuxi init my-business-card -t github:arpixnet/digital-business-card
```

Then navigate to your project directory and install dependencies:

```bash
cd my-business-card
npm install # or pnpm install, yarn install, bun install
```

### Option 2: Using Git

```bash
# Clone the repository
git clone https://github.com/arpixnet/digital-business-card.git my-business-card
cd my-business-card

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## Configuration

### Environment Variables

Copy the `.env.example` file to `.env` and customize the variables:

```bash
cp .env.example .env
```

Key environment variables to configure:

```
ME_FULL_NAME=Your Full Name
ME_SHORT_NAME=yourname
ME_EMAIL=your.email@example.com
ME_PHONE=+1234567890
ME_WHATSAPP=1234567890
ME_WEBSITE=https://yourwebsite.com
ME_ADDRESS=Your City, Country
ME_BUSINESS=Your Company

COMPANY_NAME=Your Company
COMPANY_EMAIL=info@yourcompany.com
COMPANY_LOGO_PATH=/images/your_logo.png
COMPANY_WEBSITE=https://yourcompany.com
```

### Profile Photo

Replace the default avatar in `/public/images/avatar.jpg` with your professional photo.

## Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Deployment

### Static Hosting

You can also generate a static version of the site:

```bash
npm run generate
```

Then deploy the generated files in the `.output/public` directory to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Customization

### Adding Social Media Links

Edit the social media links in `app/pages/index.vue`:

```javascript
// Example of adding or modifying social links
const socialLinks = [
  { url: 'https://www.linkedin.com/in/yourprofile/', icon: 'garden:linkedin-fill-16', ariaLabel: 'LinkedIn' },
  { url: 'https://github.com/yourusername', icon: 'garden:github-fill-16', ariaLabel: 'GitHub' },
  // Add more social links as needed
]
```

### Customizing Colors

Modify the primary color in `nuxt.config.ts`:

```javascript
tailwindcss: {
  config: {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#YourColor",
            // Add color variations
          }
        }
      }
    }
  }
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Created By

[Arpix Solutions](https://arpixnet.com)
