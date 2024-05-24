import Loader from '@/app/components/atoms/Loader';

export default function PageLoader() {
  return (
    <div className='bg-custom-bg-color fixed inset-0 h-full w-full'>
      <Loader />
    </div>
  );
}
