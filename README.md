Преза + демо + результат работы программы:
https://drive.google.com/drive/folders/1MqmPgnk-7Erea0owfplp7rmIjvxon73h?usp=sharing

[Методология работы с данными ](metodica_raboti_s_dannymi.md)

# Инструкция по автозапуску и автоустановке всех записимостей

### Для начала нужно установить обязательные записимости и скопировать проект

#### 1. Зависимости

1. **Node.js и npm**:  
   Загрузите и установите [Node.js](https://nodejs.org/).  
   Убедитесь, что `npm` устанавливается вместе с Node.js. Проверьте их версии:

   ```bash
   node -v
   npm -v
   ```

2. **Git** (для клонирования проекта):  
   Установите [Git](https://git-scm.com/), если он еще не установлен.

#### 2. Клонирование репозитория

Если проект размещен на GitHub или другом репозитории, выполните:

```bash
git clone <ссылка-на-репозиторий>
```

Перейдите в папку с проектом:

```bash
cd file-upload-app
```

### Запуск

```bash
pip install setuptools
python startProject.py
```

Если все зависимости для самого проекта уже установлены , он пропутит их установку

---

# Для установки вучную

## Инструкция по установке fastapi и запуску его

```bash
pip install -r .\requirements.txt
```

```bash
uvicorn app:app --reload
```

## Инструкция по установке React и запуску кго

### 1. Установка необходимых инструментов

Перед началом убедитесь, что на вашем компьютере установлены:

1. **Node.js и npm**:  
   Загрузите и установите [Node.js](https://nodejs.org/).  
   Убедитесь, что `npm` устанавливается вместе с Node.js. Проверьте их версии:

   ```bash
   node -v
   npm -v
   ```

2. **Git** (для клонирования проекта):  
   Установите [Git](https://git-scm.com/), если он еще не установлен.

---

### 2. Клонирование репозитория

Если проект размещен на GitHub или другом репозитории, выполните:

```bash
git clone <ссылка-на-репозиторий>
```

Перейдите в папку с проектом:

```bash
cd file-upload-app
```

---

### 3. Установка зависимостей

1. **Создание проекта (если это ваш проект):**  
   Если проекта еще нет, создайте новый React-проект:

   ```bash
   npx create-react-app <имя-проекта>
   cd <имя-проекта>
   ```

2. **Установка зависимостей из `package.json`:**  
   В папке проекта выполните:

   ```bash
   npm install
   ```

3. **Добавление библиотеки `react-icons`:**  
   Установите `react-icons`, если она не добавлена:
   ```bash
   npm install react-icons
   ```

---

### 4. Запуск проекта

Для локального запуска приложения выполните:

```bash
npm start
```

Приложение будет доступно по адресу:  
[http://localhost:3000](http://localhost:3000)

---
