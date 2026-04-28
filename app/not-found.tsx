import Container from '@/src/components/common/Container';
import Button from '@/src/components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-light-bg">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-3xl font-bold text-navy mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for doesn't exist.
          </p>
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
