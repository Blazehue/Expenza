# Expenza - Personal Finance Tracker

A modern, feature-rich personal finance tracking application built with Next.js 15, React 19, and TypeScript. Track your expenses, manage budgets, analyze spending patterns, and take control of your financial life.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 💰 Expense Management
- **Add, Edit & Delete Expenses**: Intuitive expense entry with description, amount, category, and date
- **Category Organization**: Pre-configured categories (Food, Transport, Shopping, Entertainment, Bills, Healthcare, Education, Other)
- **Custom Categories**: Create and manage your own expense categories with custom colors and icons
- **Real-time Updates**: Instant reflection of changes across all views

### 📊 Budget Tracking
- **Overall Budget**: Set and track your total monthly/periodic budget
- **Category Budgets**: Assign specific budgets to individual categories
- **Budget Progress**: Visual indicators showing spending vs budget limits
- **Budget Alerts**: Stay informed when approaching or exceeding budget limits

### 📈 Analytics & Insights
- **Spending Trends**: Visualize spending patterns over time
- **Category Breakdown**: Pie charts and bar graphs showing expense distribution
- **Time-based Analysis**: Filter and analyze expenses by date ranges
- **Summary Statistics**: Quick overview of total spending, averages, and trends

### 📁 Data Management
- **Export Data**: Download your financial data in JSON format
- **Import Data**: Restore or migrate data from previous exports
- **Local Storage**: All data stored securely in your browser
- **Privacy First**: No server-side data storage - your data stays on your device

### 🎨 User Interface
- **Modern Design**: Clean, intuitive interface built with Radix UI components
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Loading States**: Professional loading screens and skeleton loaders

### 📱 Additional Features
- **Dashboard Overview**: At-a-glance view of your financial status
- **Search & Filter**: Quickly find specific expenses
- **Sorting Options**: Sort expenses by date, amount, or category
- **Tab Navigation**: Easy switching between Dashboard, Expenses, Budget, Analytics, and Settings

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or yarn/pnpm/bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-tracker-app-main
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   > **Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between `autumn-js` and `better-auth`. This has been tested and works correctly.

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.3.5** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.x** - Type safety

### UI Components & Styling
- **Radix UI** - Accessible component primitives
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Framer Motion 12.x** - Animation library
- **Lucide React** - Icon library
- **Recharts 3.x** - Chart library for analytics

### State Management & Forms
- **React Hook Form 7.x** - Form handling
- **Zod 4.x** - Schema validation
- **LocalStorage** - Client-side data persistence

### Additional Libraries
- **date-fns** - Date manipulation
- **Sonner** - Toast notifications
- **clsx & tailwind-merge** - Conditional class names
- **next-themes** - Theme management

### Development Tools
- **ESLint 9.x** - Code linting
- **PostCSS** - CSS processing
- **Better Auth** - Authentication utilities (optional)
- **Drizzle ORM** - Database toolkit (optional)

## 📂 Project Structure

```
finance-tracker-app-main/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── ExpenseTracker.tsx    # Main app component
│   │   ├── ExpenseForm.tsx       # Expense input form
│   │   ├── ExpenseList.tsx       # Expense list view
│   │   ├── Dashboard.tsx         # Dashboard overview
│   │   ├── Analytics.tsx         # Analytics charts
│   │   ├── BudgetSettings.tsx    # Budget management
│   │   ├── CategoryManager.tsx   # Category management
│   │   ├── ExportImport.tsx      # Data import/export
│   │   ├── ThemeToggle.tsx       # Dark mode toggle
│   │   └── ui/                   # Reusable UI components
│   ├── types/             # TypeScript type definitions
│   │   └── expense.ts     # Expense, Category, Budget types
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Helper functions
│   └── hooks/             # Custom React hooks
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── eslint.config.mjs      # ESLint configuration
└── package.json           # Dependencies
```

## 🎯 Usage Guide

### Adding an Expense
1. Click the "Add Expense" button or the "+" icon
2. Fill in the expense details (amount, description, category, date)
3. Click "Add Expense" to save

### Managing Budgets
1. Navigate to the "Budget" tab
2. Set your overall monthly budget
3. Optionally, assign budgets to specific categories
4. Save changes to track your spending limits

### Viewing Analytics
1. Go to the "Analytics" tab
2. View spending trends, category breakdowns, and statistics
3. Use date filters to analyze specific time periods

### Exporting/Importing Data
1. Navigate to "Settings" or the "Data" tab
2. Click "Export Data" to download a JSON file
3. Click "Import Data" to restore from a previous export
4. All data including expenses, categories, and budgets will be preserved

### Customizing Categories
1. Go to the "Categories" tab in Settings
2. Add new categories with custom names, colors, and icons
3. Delete unused categories (if they have no associated expenses)

## 🔒 Data Privacy

- All data is stored locally in your browser's localStorage
- No data is sent to external servers
- Export your data regularly to back up your financial information
- Clearing browser data will delete all stored expenses

## 🐛 Known Issues & Dependencies

### Dependency Conflicts
- **better-auth** version conflict with **autumn-js** (resolved with `--legacy-peer-deps`)

### Security Advisories
- Review `npm audit` output for current vulnerability status
- Consider updating to newer versions when available
- Critical: better-auth <1.3.26 (update recommended)

### Compatibility Notes
- Requires Node.js 20.x or higher
- Best experienced in modern browsers (Chrome, Firefox, Safari, Edge)
- LocalStorage must be enabled for data persistence

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Support

If you encounter any issues or have questions:
- Open an issue in the repository
- Check existing issues for solutions
- Review the documentation

---

**Made with ❤️ for better personal finance management**
