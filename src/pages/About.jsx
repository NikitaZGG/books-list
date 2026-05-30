function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244d4d] mb-6">
        О магазине
      </h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 mb-4">
          Добро пожаловать в
          <span className="font-semibold text-[#244d4d]"> DudeShape</span> —
          место, где книги оживают. Мы основали этот магазин, чтобы делиться
          любовью к чтению и делать качественную литературу доступной каждому.
        </p>
        <p className="text-gray-700 mb-4">
          В нашем ассортименте — тысячи изданий: от бестселлеров и новинок до
          редких экземпляров. Мы тщательно отбираем каждую книгу, чтобы вы могли
          найти то, что подарит вам новые эмоции и знания.
        </p>
        <div className="bg-gray-50 p-5 rounded-xl my-6">
          <h2 className="text-xl font-semibold text-[#244d4d] mb-3">
            Почему выбирают нас?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li> Более 10 000 книг в наличии</li>
            <li> Быстрая доставка по всей стране</li>
            <li> Удобные способы оплаты</li>
            <li> Программа лояльности и скидки</li>
          </ul>
        </div>
        <p className="text-gray-700">
          Если у вас есть вопросы или предложения, напишите нам:{" "}
          <a
            href="mailto:hello@dudeshape.com"
            className="text-[#244d4d] hover:underline"
          >
            hello@dudeshape.com
          </a>
          .
          <br />
          Спасибо, что вы с нами. Приятного чтения!
        </p>
      </div>
    </div>
  );
}

export default About;
