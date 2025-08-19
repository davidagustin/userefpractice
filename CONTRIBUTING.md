# Contributing to React useRef Examples

Thank you for your interest in contributing to the React useRef Examples project! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/yourusername/userefpractice.git`
3. **Install dependencies**: `npm install`
4. **Start development server**: `npm run dev`
5. **Make your changes**
6. **Test your changes**: `npm run build && npm run lint`
7. **Commit with conventional commits**: `git commit -m "feat: add new useRef example"`
8. **Push and create a pull request**

## 📋 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### useRef Examples
When adding new useRef examples:

1. **Choose the right category**:
   - Identification & Content
   - Styling & Dimensions
   - DOM Relationships
   - Form Elements
   - Media Elements
   - Advanced Elements

2. **Follow the pattern**:
   ```typescript
   function NewExample() {
     const elementRef = useRef<HTMLElementType>(null);
     const [info, setInfo] = useState<Partial<InfoType>>({});
     
     const updateInfo = () => {
       if (elementRef.current) {
         setInfo({
           // Add relevant properties
         });
       }
     };
     
     return (
       <Card>
         <CardHeader>
           <CardTitle>Example Title</CardTitle>
           <CardDescription>Description</CardDescription>
         </CardHeader>
         <CardContent>
           {/* Interactive elements */}
           {/* JSON output display */}
         </CardContent>
       </Card>
     );
   }
   ```

3. **Include interactive elements** that demonstrate the useRef properties
4. **Show real-time updates** in the JSON output
5. **Add proper TypeScript types**

### Testing
- Test your changes locally before submitting
- Ensure the build passes: `npm run build`
- Check for linting errors: `npm run lint`
- Test on different browsers if applicable

## 📝 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat: add new useRef example for canvas manipulation"
git commit -m "fix: resolve TypeScript error in form validation"
git commit -m "docs: update README with new examples"
git commit -m "style: improve button styling in media examples"
```

## 🐛 Reporting Bugs

Before reporting a bug:

1. **Check existing issues** to see if it's already reported
2. **Try to reproduce** the issue locally
3. **Include details**:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 💡 Suggesting Features

When suggesting new features:

1. **Check existing issues** to see if it's already suggested
2. **Provide clear description** of the feature
3. **Explain the use case** and benefits
4. **Consider implementation** complexity
5. **Include mockups** or examples if possible

## 🔧 Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/userefpractice.git
cd userefpractice

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Project Structure
```
src/
├── app/
│   ├── page.tsx          # Main application
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
└── components/
    └── ui/               # shadcn/ui components
```

## 📚 Resources

- [React useRef Documentation](https://react.dev/reference/react/useRef)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the project guidelines

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the React useRef Examples project! 🚀
