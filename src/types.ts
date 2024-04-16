export type ConversionMethod =
  | 'toBlob'
  | 'toCanvas'
  | 'toJpeg'
  | 'toPixelData'
  | 'toPng'
  | 'toSvg';

export interface RenderImageProps {
  component: React.ReactNode;
  method?: ConversionMethod;
  buttonText?: string;
  buttonClassName?: string;
  onSuccess?: (
    data: Blob | null | HTMLCanvasElement | string | Uint8ClampedArray,
  ) => void;
  onError?: (error: string) => void;
  buttonComponent?: React.ReactNode;
}