import React, { useState } from 'react';

interface InputOTPProps {
  length: number; // Độ dài của mã OTP
  onChange?: (otp: string) => void; // Hàm callback khi OTP thay đổi
}

const InputOTP: React.FC<InputOTPProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, ''); // Chỉ cho phép nhập số
    if (value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (onChange) {
      onChange(newOtp.join(''));
    }

    // Chuyển focus sang ô tiếp theo nếu có
    if (value !== '' && index < length - 1) {
      (document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement)?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      (document.getElementById(`otp-input-${index - 1}`) as HTMLInputElement)?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {Array(length)
        .fill('')
        .map((_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
    </div>
  );
};

export default InputOTP;
