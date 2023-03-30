import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Row, Space } from 'antd';
import Logo from '../Logo/Logo';

interface HeroProps {
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, ctaText, ctaLink }) => {
  return (
    <>
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
              Master Your Budget with Our{' '}
              <span className='mt-2 inline-block align-sub'>
                <Logo width={350} height={40} />
              </span>{' '}
              Today!
            </h1>
            <p className='text-lg md:text-xl mb-8'>
              Take charge of your finances and stay on top of your budget with
              our easy-to-use web app. Sign up now and start saving for your
              financial goals!
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
      <div className='w-11/12 mx-auto'>
        <div className='hero-section'>
          <Row align='middle'>
            <Col xs={24} sm={12}>
              <h1>Welcome to My Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button type='primary' size='large' href='#cta'>
                Get Started
              </Button>
            </Col>
            <Col xs={24} sm={12}>
              <Image
                src='/rupee.jpg'
                width={300}
                height={300}
                alt='Hero Image'
              />
            </Col>
          </Row>
        </div>
        <div className='about-section '>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Image
                src='/manage-your-expenses.jpg'
                width={300}
                height={300}
                alt='About Image'
              />
            </Col>
            <Col xs={24} sm={12}>
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </div>
        <div className='services-section'>
          <h2>My Services</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Image
                src='/cash-machine.jpg'
                width={200}
                height={200}
                alt='Service 1'
                objectFit={'contain'}
              />
              <h3>Service 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col xs={24} sm={8}>
              <Image
                src='/all-cash-varity.jpg'
                alt='Service 2'
                width={200}
                height={200}
                objectFit={'contain'}
              />
              <h3>Service 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col xs={24} sm={8}>
              <Image
                src='/money-plant.jpg'
                width={200}
                height={200}
                alt='Service 3'
              />
              <h3>Service 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Hero;
