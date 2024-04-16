import React from 'react';
import {
  useToBlob,
  useToCanvas,
  useToJpeg,
  useToPixelData,
  useToPng,
  useToSvg,
} from '@hugocxl/react-to-image';
import { RenderImageProps } from '../types';

const RenderImage: React.FC<RenderImageProps> = ({
  component,
  method = 'toPng',
  buttonText = 'Convert',
  buttonClassName = '',
  onSuccess,
  onError,
  buttonComponent,
}) => {
  const conversionMethods = {
    toBlob: useToBlob,
    toCanvas: useToCanvas,
    toJpeg: useToJpeg,
    toPixelData: useToPixelData,
    toPng: useToPng,
    toSvg: useToSvg,
  };

  const [state, convert, ref] = conversionMethods[method]<HTMLDivElement>({
    onSuccess,
    onError,
  });

  const renderButton = () => {
    if (buttonComponent) {
      return React.cloneElement(buttonComponent as React.ReactElement, {
        onClick: convert,
        disabled: state.isLoading,
      });
    }

    return (
      <button
        onClick={convert}
        disabled={state.isLoading}
        className={buttonClassName}
      >
        {buttonText}
      </button>
    );
  };

  return (
    <div>
      <div ref={ref}>{component}</div>
      {renderButton()}
      {state.isLoading && <span>Loading...</span>}
      {state.isError && <span>Error: {state.error}</span>}
    </div>
  );
};

export default RenderImage;
