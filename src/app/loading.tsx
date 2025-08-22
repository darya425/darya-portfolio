import { ImSpinner8 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-background/80">
      <div className="w-full h-dvh grid place-content-center">
        <ImSpinner8 className="h-48 w-48 animate-spin text-foreground/20" />
      </div>
    </div>
  );
}
