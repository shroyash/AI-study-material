'use client';

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect } from 'react';

const Provider = ({ children }) => {

  return <>{children}</>;
};

export default Provider;

