/**
 * @file App.jsx
 * @description Component chính của ứng dụng
 */

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { WalletProvider } from './modules/wallet/WalletContext';
import WalletButton from './modules/wallet/WalletButton';
import { FaCheckCircle, FaLock, FaCoins } from 'react-icons/fa';

function App() {
  
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Task Manager DApp
                  </h1>
                  <p className="text-xs text-gray-500">
                    Quản lý công việc phi tập trung
                  </p>
                </div>
              </div>
              
              {/* Wallet Button */}
              <WalletButton />
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Chào mừng đến với Task Manager DApp
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Quản lý công việc một cách phi tập trung trên Blockchain Ethereum
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Feature 1 */}
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FaLock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Bảo mật cao
                  </h3>
                  <p className="text-gray-600">
                    Dữ liệu được lưu trữ trên Blockchain, đảm bảo an toàn và minh bạch
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="p-6 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Dễ sử dụng
                  </h3>
                  <p className="text-gray-600">
                    Giao diện thân thiện, dễ dàng tạo và quản lý công việc
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="p-6 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FaCoins className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hệ thống thưởng
                  </h3>
                  <p className="text-gray-600">
                    Thêm tiền thưởng ETH cho công việc, tạo động lực hoàn thành
                  </p>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Lưu ý:</strong> Vui lòng kết nối ví MetaMask và đảm bảo đang ở Sepolia Testnet để sử dụng ứng dụng.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-600">
              © 2024 Task Manager DApp. Được xây dựng trên Ethereum Blockchain.
            </p>
          </div>
        </footer>
      </div>
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </WalletProvider>
  );
}

export default App;
