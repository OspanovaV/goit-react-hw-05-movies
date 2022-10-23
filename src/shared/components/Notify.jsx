import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

export default function Notify({ msg }) {
  toast.error(msg.message);
  return <ToastContainer />;
}