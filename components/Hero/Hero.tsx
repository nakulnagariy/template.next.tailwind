import Image from 'next/image';
import Link from 'next/link';
import { Button, Space } from 'antd';
import Logo from '../Logo/Logo';

interface HeroProps {
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, ctaText, ctaLink }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col md:flex-row items-center md:items-center justify-between w-11/12 mx-auto px-4 py-8 md:py-12'>
        <div className='mb-8 md:mb-0 md:mr-8 w-full md:w-1/2'>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt='Hero Image'
            objectFit={'contain'}
          />
        </div>
        <div className='w-full md:w-1/2'>
          <h1 className='text-4xl md:text-5xl font-bold mb-10 '>
            Master Your Budget with Our <span className='mt-2 inline-block align-sub'><Logo width={350} height={40}/></span> Today!
          </h1>
          <p className='text-lg md:text-xl mb-8'>
            Take charge of your finances and stay on top of your budget with our easy-to-use web app. <Link href='/auth' passHref legacyBehavior>
            Sign up
          </Link> now and start saving for your financial goals!
          </p>
          <Space direction='vertical' className='w-full'>
            <Button
              type='primary'
              block
              className='text-2xl bg-slate-800 text-slate-100 h-16 dark:bg-slate-100 dark:text-slate-800'>
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Hero;
