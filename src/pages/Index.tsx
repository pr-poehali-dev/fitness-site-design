import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0 && !value.startsWith('7')) {
      value = '7' + value;
    }
    if (value.length > 11) value = value.slice(0, 11);
    setPhone(value);
  };

  const formatPhone = (value: string) => {
    if (!value) return '';
    if (value.length <= 1) return `+${value}`;
    if (value.length <= 4) return `+${value.slice(0, 1)} (${value.slice(1)}`;
    if (value.length <= 7) return `+${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4)}`;
    if (value.length <= 9) return `+${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7)}`;
    return `+${value.slice(0, 1)} (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9, 11)}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Dumbbell" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">ФитЛайф</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('directions')} className="text-sm font-medium hover:text-primary transition-colors">Направления</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">Записаться</Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <Badge className="w-fit bg-secondary/20 text-secondary-foreground border-secondary">Первая тренировка бесплатно</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Твой путь к <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">идеальной форме</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Достигай своих целей вместе с лучшими тренерами России. Персональный подход, современное оборудование и атмосфера, которая мотивирует на результат.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Начать сегодня
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('prices')} className="text-lg px-8">
                  Узнать цены
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Профессиональных тренеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Направлений фитнеса</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/abb55560-96c1-4e1e-ba8d-e50acc0783ff/files/37f3b5f5-e499-42da-b9be-94e79c44786c.jpg" 
                alt="Фитнес тренировка"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary">Наши направления</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Выбери свой путь к результату</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От силовых тренировок до йоги — мы создали программы для любых целей и уровней подготовки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Dumbbell', title: 'Силовые тренировки', desc: 'Наращивай мышечную массу и становись сильнее с профессиональными тренерами', color: 'from-red-500 to-orange-500' },
              { icon: 'Heart', title: 'Кардио зона', desc: 'Укрепляй сердце и сжигай калории на современных тренажерах', color: 'from-pink-500 to-rose-500' },
              { icon: 'Activity', title: 'Функциональный тренинг', desc: 'Развивай силу, выносливость и координацию для повседневной жизни', color: 'from-purple-500 to-violet-500' },
              { icon: 'Users', title: 'Групповые программы', desc: 'Тренируйся в компании единомышленников и заряжайся энергией группы', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Sparkles', title: 'Йога и пилатес', desc: 'Обрети гибкость, баланс и внутреннюю гармонию', color: 'from-green-500 to-emerald-500' },
              { icon: 'Zap', title: 'HIIT тренировки', desc: 'Высокоинтенсивные интервальные тренировки для быстрого результата', color: 'from-yellow-500 to-amber-500' },
            ].map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary-foreground border-secondary">Цены и абонементы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Выгодные предложения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Выбери тариф, который подходит именно тебе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Старт', 
                price: '2 990', 
                period: '8 посещений', 
                features: ['Доступ в тренажерный зал', 'Кардио зона', 'Раздевалки и душевые', 'Консультация тренера'],
                popular: false,
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                name: 'Оптимальный', 
                price: '4 990', 
                period: 'Безлимит на месяц', 
                features: ['Все из тарифа "Старт"', 'Безлимитное посещение', 'Групповые программы', 'Бесплатная заморозка 5 дней'],
                popular: true,
                gradient: 'from-primary to-orange-500'
              },
              { 
                name: 'Премиум', 
                price: '9 990', 
                period: 'Безлимит + тренер', 
                features: ['Все из тарифа "Оптимальный"', '8 персональных тренировок', 'Индивидуальная программа', 'Консультация нутрициолога'],
                popular: false,
                gradient: 'from-purple-500 to-pink-500'
              },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative overflow-hidden ${plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center">
                    <span className="text-white font-semibold text-sm">🔥 Самый популярный</span>
                  </div>
                )}
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-xl text-muted-foreground">₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} size="lg" onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">Принимаем к оплате:</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <Badge variant="outline" className="text-base px-4 py-2">Сбербанк</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Тинькофф</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">ЮMoney</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Наличные</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Что говорят о нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Анна Петрова', text: 'За 3 месяца тренировок достигла результата, о котором мечтала годами! Тренеры — профессионалы своего дела, всегда поддерживают и мотивируют.', rating: 5, city: 'Москва' },
              { name: 'Дмитрий Соколов', text: 'Отличный зал с современным оборудованием. Групповые тренировки проходят динамично и весело. Рекомендую всем, кто хочет изменить свою жизнь!', rating: 5, city: 'Санкт-Петербург' },
              { name: 'Елена Волкова', text: 'Йога-классы просто волшебные! Инструктор помогает раскрыть потенциал тела и обрести внутреннюю гармонию. Хожу уже полгода и не могу остановиться.', rating: 5, city: 'Екатеринбург' },
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.city}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary-foreground border-secondary">Свяжись с нами</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Запишись на первую тренировку</h2>
            <p className="text-lg text-muted-foreground">
              Оставь заявку, и мы свяжемся с тобой в течение 15 минут
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Номер телефона</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formatPhone(phone)}
                    onChange={handlePhoneChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение (необязательно)</label>
                  <Textarea 
                    placeholder="Расскажите о своих целях или задайте вопрос..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="underline hover:text-foreground">политикой конфиденциальности</a>
                  {' '}и{' '}
                  <a href="/terms" className="underline hover:text-foreground">офертой</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Dumbbell" size={28} className="text-primary" />
                <span className="text-2xl font-bold">ФитЛайф</span>
              </div>
              <p className="text-sm text-background/70">
                Твой надежный партнер на пути к здоровью и отличной форме
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-background transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('directions')} className="hover:text-background transition-colors">Направления</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-background transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-background transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@fitlife.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  VK
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  TG
                </a>
                <a href="https://ok.ru" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  OK
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2025 ФитЛайф. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-background transition-colors">Политика конфиденциальности</a>
              <a href="/terms" className="hover:text-background transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
