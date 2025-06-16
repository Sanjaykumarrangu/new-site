'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactPage = () => {
  const [status, setStatus] = useState<'SUCCESS' | 'ERROR' | ''>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('https://formspree.io/f/xyzjjgvw', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new URLSearchParams(data as Record<string, string>),
    });

    if (res.ok) {
      setStatus('SUCCESS');
      reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <main className="bg-white text-black py-18 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 text-gray-700">
            Fill out the form or get in touch using the information provided.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded bg-white text-black"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' },
                })}
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded bg-white text-black"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9]{10,15}$/, message: 'Invalid phone number' },
                })}
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 p-3 rounded bg-white text-black"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                {...register('message', { required: 'Message cannot be empty' })}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded bg-white text-black"
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          {status === 'SUCCESS' && (
            <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</p>
          )}
        </div>

        {/* Contact Info + Map */}
        <div className="bg-gray-50 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="mb-3 text-gray-700">📍 6-100/A, Lakshmipur, Malkapur, Telangana 505451</p>
          <p className="mb-2 text-gray-700">📞 Phone: +91 9618797744</p>
          <p className="mb-4 text-gray-700">📧 Email:vortexpowerlinesolutions@gmail.com</p>

          <Link
            href="https://wa.me/919618797744"
            target="_blank"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            💬 Chat on WhatsApp
          </Link>

          {/* Optional Google Map */}
          <div className="mt-6">
            <iframe
              title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.896673703908!2d79.0785017869729!3d18.46332620876542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdf9e1b6eefbd%3A0x5d8ea5545b8d0678!2sVORTEX%20POWERLINE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1750047556011!5m2!1sen!2sin" 
              width="100%"
              height="200"
              className="rounded border"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
