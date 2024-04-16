# React Component to Image

A simple component that captures React components as images with ease, supporting PNG, JPEG, SVG, and more. Built on top of [react-to-image](https://github.com/hugocxl/react-to-image).

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
