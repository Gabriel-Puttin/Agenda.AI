import React from 'react';
import { Calendar, MessageSquare, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Automatize seus agendamentos
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Transforme sua agenda com inteligência artificial. Atenda mais clientes, reduza faltas e aumente sua produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all"
              >
                Começar Agora
              </button>
              <button 
                onClick={() => navigate('/demo')}
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition-all"
              >
                Ver Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
              <div className="absolute -top-4 -left-4 bg-indigo-600 rounded-full p-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Agendamento Inteligente</h3>
              <p className="text-gray-600">
                Automatize seus compromissos com IA e nunca mais perca um cliente.
              </p>
            </div>

            <div className="relative mt-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all">
              <div className="absolute -top-4 -left-4 bg-purple-600 rounded-full p-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Chatbot 24/7</h3>
              <p className="text-gray-600">
                Atendimento automatizado que nunca dorme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}