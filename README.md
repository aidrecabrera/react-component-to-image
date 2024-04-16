![image](https://github.com/aidrecabrera/react-component-to-image/assets/61798731/54f403e2-a4c9-4af7-a13e-38058c6f6d87)

<div align="center" style="padding-top: 20px">

[![NPM](https://img.shields.io/npm/dm/react-component-to-image.svg?&logo=npm)](https://www.npmjs.com/package/react-component-to-image)
[![Version](https://img.shields.io/npm/v/react-component-to-image.svg?logo=npm)](https://www.npmjs.com/package/react-component-to-image)
[![Size](https://img.shields.io/bundlephobia/minzip/react-component-to-image)](https://bundlephobia.com/result?p=react-component-to-image)
[![Language](https://img.shields.io/badge/language-TypeScript-blue.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/github/license/hugocxl/react-to-image)](https://www.npmjs.com/package/react-component-to-image)
 
A simple component that captures React components as images with ease, supporting PNG, JPEG, SVG, and more. Built on top of <a href="https://github.com/hugocxl/react-to-image" target="_blank"> react-to-image</a>
</div>


> [!TIP]
> The banner above was generated with this component. See [example](https://github.com/aidrecabrera/react-component-to-image-example) :)



## Installation

To install `react-component-to-image`, use npm or yarn:

```bash
npm install react-component-to-image # or pnpm install react-component-to-image
```

## Usage

Import the `RenderImage` component and pass your desired component as the `component` prop:

```jsx
import React from 'react';
import { RenderImage } from 'react-component-to-image';

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is the content of my component.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <RenderImage
        component={<MyComponent />}
        method='toPng'
        buttonText='Capture as PNG'
        onSuccess={(data) => console.log('PNG data:', data)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
}

export default App;
```

## Props

The `RenderImage` component accepts the following props:

| Prop            | Type                                                                        | Default     | Description                                                |
| --------------- | --------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------- |
| component       | `React.ReactNode`                                                           | (required)  | The React component to capture as an image.                |
| method          | `'toBlob' \| 'toCanvas' \| 'toJpeg' \| 'toPixelData' \| 'toPng' \| 'toSvg'` | `'toPng'`   | Conversion method for capturing the component as an image. |
| buttonText      | `string`                                                                    | `'Convert'` | Text displayed on the conversion button.                   |
| buttonClassName | `string`                                                                    | `''`        | CSS class name for the conversion button.                  |
| onSuccess       | `(data: any) => void`                                                       | `undefined` | Callback function on successful image conversion.          |
| onError         | `(error: string) => void`                                                   | `undefined` | Callback function on conversion error.                     |
| buttonComponent | `React.ReactNode`                                                           | `undefined` | Custom button component to replace the default button.     |

## Conversion Methods

`react-component-to-image` supports the following conversion methods:

| Method        | Description                                       |
| ------------- | ------------------------------------------------- |
| `toBlob`      | Converts the component to a Blob object.          |
| `toCanvas`    | Converts the component to an HTML canvas element. |
| `toJpeg`      | Converts the component to a JPEG image.           |
| `toPixelData` | Converts the component to pixel data.             |
| `toPng`       | Converts the component to a PNG image.            |
| `toSvg`       | Converts the component to an SVG image.           |

## Custom Button Component

By default, it uses the button component for the conversion button. However, you can optionally provide your own custom button component using the `buttonComponent` prop.

Your custom button component will receive the following props:

- `onClick`: The function to be called when the button is clicked.
- `disabled`: A boolean value indicating whether the button should be disabled.

Here's an example of using a custom button component:

```jsx
import React from 'react';
import { RenderImage } from 'react-component-to-image';

function MyButton({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Custom Button
    </button>
  );
}

function App() {
  return (
    <div>
      <RenderImage
        component={<MyComponent />}
        method='toJpeg'
        onSuccess={(data) => console.log('JPEG data:', data)}
        onError={(error) => console.error('Error:', error)}
        buttonComponent={<MyButton />}
      />
    </div>
  );
}

export default App;
```

## Examples

Here are a few examples of how you can use `react-component-to-image` in your React application:

### Capturing a Component as a PNG Image

```jsx
import React from 'react';
import { RenderImage } from 'react-component-to-image';

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is the content of my component.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <RenderImage
        component={<MyComponent />}
        method='toPng'
        buttonText='Capture as PNG'
        onSuccess={(data) => console.log('PNG data:', data)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
}

export default App;
```

### Capturing a Component as a JPEG Image

```jsx
import React from 'react';
import { RenderImage } from 'react-component-to-image';

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is the content of my component.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <RenderImage
        component={<MyComponent />}
        method='toJpeg'
        buttonText='Capture as JPEG'
        onSuccess={(data) => console.log('JPEG data:', data)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
}

export default App;
```

### Capturing a Component as an SVG Image

```jsx
import React from 'react';
import { RenderImage } from 'react-component-to-image';

function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <p>This is the content of my component.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <RenderImage
        component={<MyComponent />}
        method='toSvg'
        buttonText='Capture as SVG'
        onSuccess={(data) => console.log('SVG data:', data)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
}

export default App;
```

## Contributing

> [!NOTE]
> I am not a perfect developer. Hence, there is more room for improvement! If you find errors or have suggestions, please open an issue or submit a pull request. Thanks!

## License

> [!IMPORTANT]
> **react-component-to-image** is open-source software licensed under the MIT License © [Aidre Cabrera](https://github.com/aidrecabrera).

---

**That's all! 👀 [@aidrecabrera](https://aidre.codes). Hope this works better for you!**
