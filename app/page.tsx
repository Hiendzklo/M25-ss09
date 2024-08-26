'use client';

import React from 'react';
import Button from './baitap/Bt1';
import Input from './baitap/Bt2';
import Breadcrumb from './baitap/Bt3';
import Select from './baitap/Bt4'; 
import InputOTP from './baitap/Bt5';
import Slider from './baitap/Bt6';

export default function Page() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleOTPChange = (otp: string) => {
    console.log('OTP:', otp);
  };
  const handleSliderChange = (value: number) => {
    console.log('Slider value:', value);
  };
  return (
    <div className="p-4">
      

      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Các dạng button</h1>
        <div className="space-x-2">
          <Button variant="destructive" size="large" onClick={handleClick}>
            Destructive
          </Button>
          <Button variant="primary" size="large" onClick={handleClick}>
            Primary
          </Button>
          <Button variant="secondary" size="large" onClick={handleClick}>
            Secondary
          </Button>
          <Button variant="primary" size="small" onClick={handleClick}>
            Size small
          </Button>
          <Button variant="primary" size="large" onClick={handleClick}>
            Size large
          </Button>
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-2xl font-bold mt-8 mb-4">Các dạng input</h1>
        <Input type="text" placeholder="Nhập text" />
        <Input type="number" placeholder="Nhập số" />
        <Input type="file" />
      </section>
      Bài 3
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Components' }]} />
      Bài 4
      <section>
        <h1 className="text-2xl font-bold mt-8 mb-4">Chọn môn học</h1>
        <Select />
      </section>
      Bài 5
      <section className="mt-8">
        <h1 className="text-2xl font-bold">Mã xác nhận</h1>
        <InputOTP length={6} onChange={handleOTPChange} />
        <p className="text-center mt-2 text-gray-500">Mã xác nhận với 6 số</p>

        <h1 className="text-2xl font-bold mt-8">Mã xác nhận</h1>
        <InputOTP length={8} onChange={handleOTPChange} />
        <p className="text-center mt-2 text-gray-500">Mã xác nhận với 8 số</p>
      </section>
      Baì 6
      <section className="mt-8">
        <h1 className="text-2xl font-bold">Slider</h1>
        <Slider defaultValue={60} onChange={handleSliderChange} />
        <Slider defaultValue={82} onChange={handleSliderChange} />
      </section>
    </div>
  );
}
