import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Básico',
      price: '99,99',
      description: 'Funcionalidades básicas para pequenos prestadores de serviços.',
      features: [
        'Agendamento automático',
        'Chat básico com clientes',
        'Lembretes por WhatsApp',
        'Relatórios mensais',
        'Suporte por email'
      ]
    },
    {
      name: 'Pro',
      price: '199,99',
      description: 'Recursos avançados e modelo escalável.',
      features: [
        'Todas as features do plano Básico',
        'Chatbot com IA avançada',
        'Integração com calendários',
        'Análise preditiva',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Sob consulta',
      description: 'Soluções customizadas e suporte direto com o cliente.',
      features: [
        'Todas as features do plano Pro',
        'Personalização completa',
        'API dedicada',
        'Gerenciamento multi-unidade',
        'Suporte 24/7'
      ]
    }
  ];

  return (
    <section id="precos" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Planos que crescem com você
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-indigo-600 to-purple-600 text-white transform scale-105'
                  : 'bg-white/80 backdrop-blur-lg'
              } shadow-xl transition-all hover:transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${!plan.popular && 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${!plan.popular && 'text-indigo-600'}`}>
                    {plan.price.includes('Sob') ? '' : 'R$ '}
                  </span>
                  <span className={`text-3xl font-bold ${!plan.popular && 'text-indigo-600'}`}>
                    {plan.price}
                  </span>
                  {!plan.price.includes('Sob') && (
                    <span className={`text-lg ${plan.popular ? 'text-indigo-100' : 'text-gray-500'}`}>
                      /mês
                    </span>
                  )}
                </div>
                <p className={`mb-8 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${
                      plan.popular ? 'text-indigo-200' : 'text-indigo-600'
                    }`} />
                    <span className={plan.popular ? 'text-indigo-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                  plan.popular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                <span>Começar agora</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}