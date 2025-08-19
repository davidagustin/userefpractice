# React useRef Examples

A comprehensive React TypeScript application demonstrating all aspects of the `useRef` hook with live, interactive examples.

## 🚀 Features

This application showcases **every single useRef example** from your reference list, organized into 6 main categories:

### 1. **Identification & Content**
- Element ID, className, classList
- innerHTML, outerHTML, textContent, innerText
- Attributes, dataset, title, lang, dir, hidden, tabIndex

### 2. **Styling & Dimensions**
- Style manipulation and CSS properties
- offsetHeight, offsetWidth, clientHeight, clientWidth
- scrollHeight, scrollWidth, offsetTop, offsetLeft
- scrollTop, scrollLeft, getBoundingClientRect()
- scrollIntoView, focus, blur

### 3. **DOM Relationships**
- parentElement, parentNode
- children, childNodes, firstChild, lastChild
- firstElementChild, lastElementChild
- nextSibling, previousSibling
- nextElementSibling, previousElementSibling
- appendChild, removeChild, replaceChild, insertBefore

### 4. **Form Elements**
- Input/Textarea properties and methods
- value, defaultValue, placeholder, type, name
- disabled, readOnly, required, maxLength, minLength
- validity, selectionStart, selectionEnd
- select(), setSelectionRange(), checkValidity()
- Checkbox/Radio properties (checked, defaultChecked, indeterminate)
- Select properties (options, selectedIndex, length)
- Form properties and methods

### 5. **Media Elements**
- Video/Audio properties and methods
- src, currentSrc, duration, currentTime, paused, ended
- volume, muted, playbackRate, readyState
- play(), pause(), load()
- Canvas properties and methods
- Image properties (src, alt, width, height, naturalWidth, naturalHeight)

### 6. **Advanced Elements**
- Dialog properties and methods (open, returnValue, show(), showModal(), close())
- Details properties (open)
- Table properties and methods (rows, tBodies, insertRow(), deleteRow())

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **shadcn/ui** components for beautiful UI
- **useRef** hook for DOM manipulation

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd userefpractice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Vercel

This application is fully compatible with Vercel deployment. Here's how to deploy:

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub account and deploy.

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: add comprehensive useRef examples"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"** and select your repository

4. **Deploy** - Vercel will automatically detect it's a Next.js project

### Option 3: Deploy via Vercel Dashboard

1. **Zip your project** (excluding node_modules and .git)

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "New Project"** → "Upload Template"

4. **Upload your zip file** and deploy

## 🎯 How to Use

1. **Navigate through tabs** to explore different useRef categories
2. **Click buttons** to see live demonstrations of ref properties and methods
3. **Interact with form elements** to see real-time property updates
4. **View the JSON output** to see all available properties and their current values
5. **Try different actions** like adding/removing elements, changing styles, etc.

## 📚 Key useRef Concepts Demonstrated

### Basic useRef Usage
```typescript
const elementRef = useRef<HTMLDivElement>(null);

// Access DOM element
if (elementRef.current) {
  elementRef.current.style.backgroundColor = 'red';
  console.log(elementRef.current.offsetHeight);
}
```

### Element Properties
```typescript
// Identification
ref.current.id                    // Element ID
ref.current.className             // CSS class string
ref.current.innerHTML             // HTML content
ref.current.textContent           // Text content

// Attributes
ref.current.attributes            // All attributes
ref.current.dataset              // data-* attributes
ref.current.title                // Title attribute

// Styling
ref.current.style                // CSSStyleDeclaration
ref.current.offsetHeight         // Height with padding & border
ref.current.clientHeight         // Inner height
ref.current.scrollHeight         // Total scrollable height
```

### Element Methods
```typescript
// Class manipulation
ref.current.classList.add('class')
ref.current.classList.remove('class')
ref.current.classList.toggle('class')

// Attribute manipulation
ref.current.getAttribute('name')
ref.current.setAttribute('name', 'value')
ref.current.removeAttribute('name')

// DOM manipulation
ref.current.appendChild(node)
ref.current.removeChild(node)
ref.current.replaceChild(new, old)

// Scrolling
ref.current.scrollIntoView(options)
ref.current.scroll(x, y)
ref.current.focus()
ref.current.blur()
```

### Form Element Properties
```typescript
// Input properties
ref.current.value                // Current value
ref.current.defaultValue         // Default value
ref.current.placeholder          // Placeholder text
ref.current.validity             // ValidityState object

// Form methods
ref.current.select()             // Select all text
ref.current.setSelectionRange(0, 5) // Set selection
ref.current.checkValidity()      // Check if valid
```

## 🎨 UI Components Used

- **Tabs** - Organized navigation between examples
- **Cards** - Clean presentation of each example
- **Buttons** - Interactive controls for demonstrations
- **Input/Textarea** - Form element examples
- **Select/Checkbox** - Additional form controls
- **Dialog** - Modal dialog examples
- **Table** - Table manipulation examples
- **Accordion** - Collapsible content sections

## 🔧 Customization

### Adding New Examples
1. Create a new component in the main page
2. Add a new tab trigger in the TabsList
3. Add corresponding TabsContent
4. Implement your useRef examples

### Styling
- Uses Tailwind CSS for styling
- shadcn/ui components for consistent design
- Responsive design for mobile and desktop

### TypeScript
- Fully typed with TypeScript
- Proper type annotations for all refs
- Type-safe DOM manipulation

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🧪 Testing

To run tests (if added):
```bash
npm run test
```

To run linting:
```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing useRef hook
- Vercel for seamless deployment
- shadcn/ui for beautiful components
- Next.js team for the excellent framework

---

**Ready to explore the power of useRef?** 🚀

Deploy this application to Vercel and start experimenting with all the DOM manipulation capabilities that useRef provides!
