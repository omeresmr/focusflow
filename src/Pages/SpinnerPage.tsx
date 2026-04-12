export default function SpinnerPage() {
  return (
    // Dieser Container sorgt für die absolute Zentrierung im gesamten Bildschirm
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Der Spinner selbst */}
        <div
          className="w-12 h-12 rounded-full animate-spin
                     border-4 border-solid border-brand-primary/20
                     border-t-brand-primary"
        ></div>
      </div>
    </div>
  );
}
