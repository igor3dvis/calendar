### Description

This is a REACT component, written without the use of external libraries!
The entire logic of the current month's "matrix" rendering is designed from scratch, and is a pet project for my portfolio.

The component is completely independent from the **state** of the parent components, and is self-contained and isolated.

The rendering technology is similar to Redux. Now, when the *"Previous"* and *"Next"* month buttons are clicked, a ***dispatch*** is called, which changes the **state** object, and calls the ***reRender*** function. ***ReRender*** re-recreates the entire DOM tree. I agree, it's non-rational, only how to make only the component I want redrawn with this approach, I don't know yet.

All corrections/additions/improvements are welcome:)

<hr>

### Описание

Это компонент REACT, написанный без использования сторонних библиотек!
Вся логика отрисовки "матрицы" текущего месяца разработана с нуля, и является пет-проектом для моего портфолио.

Компонент полностью независим от состояния родительских компонентов, и является самостоятельным и изолированным.

Tехнология отрисовки схожа с Redux. Сейчас, при нажатии кнопок *"Предыдущий"* и *"Следующий"* месяц, вызывается ***dispatch***, который изменяет объект **state**, и вызывает функцию ***reRender***. ****reRender*** перересовывает все DOM-дерево. Согласен, это неразионально, только как заставить перерисовываться только нужный мне компонет при таком подходе, я еще не знаю.

Все исправления/дополнения/улучшения приветствуются:)
