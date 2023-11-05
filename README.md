# 

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
``

### Структура приложения

Папка **components** содержит 3 компонента: 
- **Main** - компонент отвечающий за оболочку приложения
- **Offers** - компонент отвечающий за блок с предложениями
- **Offer** - компонент отвечающий за карточку предложения

Папка **style** содержит в себе стили, которые применяются на всем проекте:
- fonts.scss - подключение шрифтов
- normalize.scss - обеспечивает стилям по умолчанию одинаковый вид вне зависимости от браузера
- variables.scss - здесь собраны все scss перменные
- style.scss - основной файл стилей на проекте 

Файл **data.json** содержит в себе массив данных о предложениях: 
- **id** - идентификатор
- **title** - название предлжение
- **subtitle** - описание в карточке товара
- **salePercentage** - процент скидки
- **img** - объект хранящий в себе данные о изображении предложения
  - srcJpg - путь до изображения в формате jpg
  - srcWebp - путь до изображения в формате webp
  - title - title/alt изображения 
- **isDisabled** - параметр отвечающий за disabled карточки

Папка **imgProduct** в public, используется для хранения изображений, которые используются в карточках предложений.

Папка **img** хранит в себе изображения, которые используются на проекте. 

### Взаимодействие с приложением

1. Предполагается, что предложения будут поступать с сервера и компоненты будут рендерится на основе поступивших данных. Сейчас файл **data.json** служит локальным хранилищем таких данных, а папка **imgProduct** в public хранит изображения предложений. 

2. Контролировать неактивность карточки можно параметром **isDisabled** в **data.json**. Неактивность задается классом **offer_disabled** элементу с классом **offer_**.

3. При клике на карточку происходит выбор карточки, также при клике этот выбор можно снять. Выбор задается классом **offer_selected** элементу с классом **offer_**.



<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
