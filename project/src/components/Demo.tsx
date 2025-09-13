import React from 'react';
import { Bot, Send, Check, CheckCheck } from 'lucide-react';

export default function Demo() {
  const conversation = [
    {
      type: 'bot',
      message: 'Olá! Sou o assistente da Agenda.AI. Como posso ajudar?',
      time: '09:30'
    },
    {
      type: 'user',
      message: 'Oi! Preciso agendar um horário com o Dr. Silva',
      time: '09:31',
      status: 'read'
    },
    {
      type: 'bot',
      message: 'Claro! Vou te ajudar com isso. O Dr. Silva tem disponibilidade nas seguintes datas:\n\n📅 Segunda-feira (15/03):\n- 14:00\n- 15:30\n\n📅 Terça-feira (16/03):\n- 09:00\n- 10:30\n\nQual horário seria melhor para você?',
      time: '09:31'
    },
    {
      type: 'user',
      message: 'Segunda às 14h seria ótimo!',
      time: '09:32',
      status: 'read'
    },
    {
      type: 'bot',
      message: 'Perfeito! Vou agendar sua consulta para segunda-feira às 14h com o Dr. Silva. Você receberá um lembrete 24h antes da consulta.\n\nPreciso confirmar alguns dados:\n\nNome completo: [preencha]\nCPF: [preencha]\nConvênio (se houver): [preencha]',
      time: '09:32'
    }
  ];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Veja como funciona
          </h2>
          <p className="text-xl text-gray-600">
            Experimente a simplicidade do agendamento automático
          </p>
        </div>

        <div className="relative max-w-sm mx-auto">
          {/* Phone frame */}
          <div className="relative border-[14px] border-gray-900 rounded-[2.5rem] h-[600px] bg-gray-800">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl"></div>
            <div className="h-full bg-[#ECE5DD] overflow-y-auto">
              {/* WhatsApp header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center sticky top-0">
                <Bot className="w-8 h-8 mr-3" />
                <div>
                  <div className="font-semibold">Agenda.AI</div>
                  <div className="text-xs opacity-80">online</div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-4">
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.type === 'user'
                          ? 'bg-[#DCF8C6]'
                          : 'bg-white'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.message}</p>
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <span className="text-xs text-gray-500">{msg.time}</span>
                        {msg.type === 'user' && (
                          msg.status === 'read' ? (
                            <CheckCheck className="w-4 h-4 text-blue-500" />
                          ) : (
                            <Check className="w-4 h-4 text-gray-500" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-2 flex items-center">
                <input
                  type="text"
                  placeholder="Digite uma mensagem"
                  className="flex-1 bg-white rounded-full px-4 py-2 text-sm focus:outline-none"
                  readOnly
                />
                <button className="ml-2 p-2 rounded-full bg-[#075E54] text-white">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -top-4 -right-4"></div>
          <div className="absolute -z-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -bottom-8 -left-4"></div>
        </div>
      </div>
    </section>
  );
}