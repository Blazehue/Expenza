# 💰 Expenza - Personal Finance Tracker.

> A modern, privacy-first personal finance tracking application built with cutting-edge technologies. Take complete control of your financial life with powerful analytics, budget management, and intuitive expense tracking.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

Expenza is a feature-rich, client-side personal finance application designed for individuals who value privacy and want complete control over their financial data. Built with Next.js 15 and React 19, it offers a seamless experience across all devices with zero server-side data storage.

### Why Expenza?

- **🔒 Privacy First** - All data stays on your device, no cloud storage
- **📊 Powerful Analytics** - Visualize spending patterns with beautiful charts
- **💡 Smart Budgeting** - Set limits and get real-time budget alerts
- **🎨 Modern UI** - Clean, responsive design with dark mode support
- **⚡ Lightning Fast** - Built with Next.js 15 and Turbopack
- **📱 Cross-Platform** - Works perfectly on desktop, tablet, and mobile

---

## ✨ Features

### 💸 Comprehensive Expense Management

<table>
<tr>
<td width="50%">

**Core Functionality**
- ✅ Quick expense entry with smart forms
- ✅ Edit and delete expenses seamlessly
- ✅ Real-time updates across all views
- ✅ Advanced search and filtering
- ✅ Multiple sorting options

</td>
<td width="50%">

**Smart Organization**
- 📂 8 pre-configured categories
- 🎨 Custom category creation
- 🏷️ Category-specific colors & icons
- 📅 Date-based organization
- 🔍 Instant search functionality

</td>
</tr>
</table>

### 📊 Advanced Budget Tracking

- **Global Budget Management** - Set overall monthly/periodic spending limits
- **Category-Level Budgets** - Granular control over specific expense categories
- **Visual Progress Indicators** - Real-time budget utilization tracking
- **Smart Alerts** - Notifications when approaching or exceeding limits
- **Budget Analytics** - Historical budget performance tracking

### 📈 Rich Analytics & Insights

```
📊 Spending Trends      →  Track patterns over time
🥧 Category Breakdown   →  Pie charts for expense distribution
📉 Time-based Analysis  →  Custom date range filtering
📌 Summary Statistics   →  Total spending, averages, trends
💹 Comparative Views    →  Month-over-month comparisons
```

### 🔄 Data Management & Portability

- **JSON Export** - Download complete financial data
- **Data Import** - Restore from previous backups
- **Migration Ready** - Move data between devices
- **Zero Lock-in** - Own your data completely
- **Backup Automation** - Regular export reminders

### 🎨 Premium User Experience

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Optimized for all screen sizes |
| **Dark Mode** | Comfortable viewing in any lighting |
| **Smooth Animations** | Framer Motion-powered interactions |
| **Loading States** | Professional skeletons and loaders |
| **Toast Notifications** | Non-intrusive feedback system |
| **Tab Navigation** | Intuitive multi-view interface |

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

```bash
Node.js >= 20.0.0
npm >= 10.0.0 (or yarn/pnpm/bun)
```

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd finance-tracker-app-main

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

> **⚠️ Important**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between `autumn-js` and `better-auth`. This is tested and production-ready.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Run production server |
| `npm run lint` | Check code quality with ESLint |

---

## 🛠️ Tech Stack

### Core Framework

<table>
<tr>
<td align="center" width="33%">
<img src="https://nextjs.org/static/favicon/favicon.ico" width="48" height="48" alt="Next.js" /><br />
<strong>Next.js 15.3.5</strong><br />
<sub>React Framework</sub>
</td>
<td align="center" width="33%">
<img src="https://react.dev/favicon.ico" width="48" height="48" alt="React" /><br />
<strong>React 19.0.0</strong><br />
<sub>UI Library</sub>
</td>
<td align="center" width="33%">
<img src="https://www.typescriptlang.org/favicon-32x32.png" width="48" height="48" alt="TypeScript" /><br />
<strong>TypeScript 5.x</strong><br />
<sub>Type Safety</sub>
</td>
</tr>
</table>

### UI & Styling

- **Tailwind CSS 4.x** - Utility-first styling framework
- **Radix UI** - Accessible component primitives
- **Framer Motion 12.x** - Animation & gesture library
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode support

### Data & Forms

- **React Hook Form 7.x** - Performant form management
- **Zod 4.x** - TypeScript-first schema validation
- **Recharts 3.x** - Composable charting library
- **date-fns** - Modern date utility library

### Development Tools

- **ESLint 9.x** - Code quality enforcement
- **PostCSS** - CSS transformation pipeline
- **Turbopack** - Ultra-fast bundler

---

## 📂 Project Architecture

```
finance-tracker-app-main/
│
├── 📁 public/                    # Static assets & images
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout with providers
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles & theme
│   │
│   ├── 📁 components/            # React components
│   │   ├── ExpenseTracker.tsx    # Main application shell
│   │   ├── ExpenseForm.tsx       # Expense input form
│   │   ├── ExpenseList.tsx       # Expense list with filters
│   │   ├── Dashboard.tsx         # Overview & statistics
│   │   ├── Analytics.tsx         # Charts & insights
│   │   ├── BudgetSettings.tsx    # Budget configuration
│   │   ├── CategoryManager.tsx   # Category CRUD
│   │   ├── ExportImport.tsx      # Data portability
│   │   ├── ThemeToggle.tsx       # Dark mode switcher
│   │   └── 📁 ui/                # Reusable UI primitives
│   │
│   ├── 📁 types/                 # TypeScript definitions
│   │   └── expense.ts            # Core type definitions
│   │
│   ├── 📁 lib/                   # Utilities & helpers
│   │   └── utils.ts              # Common functions
│   │
│   └── 📁 hooks/                 # Custom React hooks
│
├── 📄 components.json            # shadcn/ui configuration
├── 📄 tailwind.config.ts         # Tailwind configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 eslint.config.mjs          # ESLint rules
└── 📄 package.json               # Dependencies & scripts
```

---

## 📖 Documentation

### Adding Your First Expense

1. **Click** the "Add Expense" button in the top navigation
2. **Enter** expense details:
   - Amount (required)
   - Description (optional)
   - Category (select from dropdown)
   - Date (defaults to today)
3. **Submit** to save the expense
4. **View** it immediately in your expense list

### Setting Up Budgets

```
Dashboard → Budget Tab → Configure Budgets
```

1. **Set Overall Budget** - Define your total monthly spending limit
2. **Category Budgets** (Optional) - Assign limits to specific categories
3. **Save Changes** - Budget tracking activates automatically
4. **Monitor Progress** - Visual indicators show spending vs limits

### Analyzing Your Spending

The Analytics tab provides multiple visualization options:

- **📊 Spending Over Time** - Line chart showing daily/weekly/monthly trends
- **🥧 Category Distribution** - Pie chart of spending by category
- **📈 Budget Performance** - Bar chart comparing actual vs budgeted amounts
- **📅 Custom Date Ranges** - Filter data to specific time periods

### Exporting & Importing Data

**To Export:**
```
Settings → Data Management → Export Data → Save JSON file
```

**To Import:**
```
Settings → Data Management → Import Data → Select JSON file
```

**What's Included:**
- ✅ All expenses with full details
- ✅ Custom categories and settings
- ✅ Budget configurations
- ✅ User preferences

### Managing Categories

**Creating Custom Categories:**
1. Navigate to Settings → Categories
2. Click "Add Category"
3. Choose a name, color, and icon
4. Save to make it available for expenses

**Deleting Categories:**
- Only categories without associated expenses can be deleted
- Reassign or delete expenses first if needed

---

## 🔒 Privacy & Security

### Data Storage

- **100% Local** - All data stored in browser localStorage
- **No Servers** - Zero external data transmission
- **No Tracking** - No analytics or telemetry
- **No Accounts** - No sign-up or authentication required

### Data Safety

```
⚠️ IMPORTANT: Clearing browser data will delete all stored information
```

**Best Practices:**
- 📥 Export your data regularly
- 💾 Keep backups in multiple locations
- 🔄 Test import functionality periodically
- 📱 Avoid using browser "Private/Incognito" mode for regular use

---

## 🐛 Known Issues & Solutions

### Dependency Conflicts

**Issue:** Peer dependency conflict between `better-auth` and `autumn-js`

**Solution:** Install with `--legacy-peer-deps` flag
```bash
npm install --legacy-peer-deps
```

**Status:** ✅ Tested and production-ready

### Security Advisories

**Current Status:**
- Review output of `npm audit` for vulnerability details
- Critical: `better-auth` versions <1.3.26 should be updated

**Recommended Action:**
```bash
npm update better-auth
```

### Browser Compatibility

**Fully Supported:**
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

**Requirements:**
- JavaScript enabled
- localStorage enabled
- Modern CSS support (Grid, Flexbox)

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

```bash
# Fork and clone the repo
git clone https://github.com/yourusername/expenza.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and test thoroughly
npm run dev

# Lint your code
npm run lint

# Commit with descriptive message
git commit -m 'Add amazing feature: detailed description'

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

### Contribution Guidelines

- **Code Style** - Follow existing patterns and conventions
- **TypeScript** - Maintain strong typing throughout
- **Testing** - Test your changes across different scenarios
- **Documentation** - Update README if adding features
- **Commits** - Use clear, descriptive commit messages

### Areas for Contribution

- 🐛 Bug fixes and issue resolution
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX refinements
- ♿ Accessibility improvements
- 🌐 Internationalization (i18n)

---

## 📊 Roadmap

### Planned Features

- [ ] **Multi-currency Support** - Track expenses in different currencies
- [ ] **Recurring Expenses** - Automate regular payment tracking
- [ ] **Receipt Scanning** - OCR-based expense entry
- [ ] **Export Formats** - CSV, PDF, Excel export options
- [ ] **Budget Templates** - Pre-configured budget plans
- [ ] **Goal Tracking** - Savings goals and milestones
- [ ] **Expense Tags** - Additional categorization layer
- [ ] **Custom Reports** - Build personalized financial reports

---

## 📝 License

This project is open source and available under the **MIT License**.

```
MIT License

Copyright (c) 2025 Expenza Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

See [LICENSE](LICENSE) file for full details.

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [Next.js](https://nextjs.org/) - The React Framework
- [React](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Radix UI](https://www.radix-ui.com/) - Component Primitives
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Recharts](https://recharts.org/) - Chart Library
- [Lucide](https://lucide.dev/) - Icon Library

Special thanks to the open-source community for making projects like this possible.

---

## 📧 Support & Contact

### Get Help

- 🐛 **Found a bug?** [Open an issue](https://github.com/yourusername/expenza/issues/new)
- 💡 **Feature request?** [Start a discussion](https://github.com/yourusername/expenza/discussions)
- 📖 **Documentation issue?** Submit a PR with improvements
- 💬 **General questions?** Check existing issues and discussions

### Stay Connected

- ⭐ Star this repository to show support
- 👀 Watch for updates and new releases
- 🔄 Share with others who might find it useful

---

<div align="center">

**Made with ❤️ for better personal finance management**

[⬆ Back to Top](#-expenza---personal-finance-tracker)

</div>
