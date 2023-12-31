# Тестовое задание на позицию HTML Coder

### Версии node и npm:

```
v18.18.0 / v9.8.1
```

### Запуск приложения

1. Склонировать репозиторий
```
git clone https://github.com/nisvem/Test-task-for-html-coders.git
```
ИЛИ скачать zip-архив и распаковать его
2. Запустить терминал из корневой папки приложения и выполнить команду для установки зависимостей
```
npm i
```
3. Далее для запуска приложения выполнить команду 
```
npm start
```

### Структура приложения

Папка **components** содержит 3 компонента: 
- **Main** - компонент отвечающий за оболочку приложения
- **Offers** - компонент отвечающий за блок с предложениями
- **Offer** - компонент отвечающий за карточку предложения

Папка **style** содержит в себе стили, которые применяются на всем проекте:
- **fonts.scss** - подключение шрифтов
- **normalize.scss** - обеспечивает стилям по умолчанию одинаковый вид вне зависимости от браузера
- **variables.scss** - здесь собраны все scss перменные
- **style.scss** - основной файл стилей на проекте 

Файл **data.json** содержит в себе массив данных о предложениях: 
- **id** - идентификатор
- **title** - название предлжение
- **subtitle** - описание в карточке товара
- **salePercentage** - процент скидки
- **img** - объект хранящий в себе данные о изображении предложения
  - **srcJpg** - путь до изображения в формате jpg
  - **srcWebp** - путь до изображения в формате webp
  - **title** - title/alt изображения 
- **isDisabled** - параметр отвечающий за disabled карточки

Папка **imgProduct** в public, используется для хранения изображений, которые используются в карточках предложений.

Папка **img** хранит в себе изображения, которые используются на проекте. 

### Взаимодействие с приложением

1. Предполагается, что предложения будут поступать с сервера и компоненты будут рендерится на основе поступивших данных. Сейчас файл **data.json** служит локальным хранилищем таких данных, а папка **imgProduct** в public хранит изображения предложений. 

2. Контролировать неактивность карточки можно параметром **isDisabled** в **data.json**. Неактивность задается классом **offer_disabled** элементу с классом **offer**.

3. При клике на карточку происходит выбор карточки, также при клике этот выбор можно снять. Выбор задается классом **offer_selected** элементу с классом **offer**.