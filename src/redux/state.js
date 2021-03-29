import { rerenderTree } from "../render"

let store = {
    _state: {
        
        galery: [
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },
            {
                path: 'images/test.jpg'
            },


        ],
        tape: [
            {
                name: 'Cлава',
                slug: 'slava',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                image: './images/postimg.jpg',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                image: './images/postimg.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                image: './images/postimg.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                image: './images/postimg.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                image: './images/postimg.jpg',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            },
            {
                name: 'Ваня',
                slug: 'Ivan',
                avatar: './images/avatar.jpg',
                isSubcribe: false,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
            }

        ],
        User: {
            textareaValue : '',
            //Синхронизирую изменения в поле для ввода поста с хранилищем
            changeTextareaValue(text){
                store.getState().User.textareaValue = text
                rerenderTree(store)
                console.log(store.getState().User.textareaValue)
                
            },
            
            addPost(text) {
                //Проверка на введенное сообщение(не пустое ли  оно)
                if (text != '') {   
                    //Создаю обьект идетичный постам, которые уже есть 
                    let NewPost = {
                        name: 'Слава',
                        slug: 'slava',
                        avatar: './images/avatar.jpg',
                        isSubcribe: true,
                        text: text
                    }

                    const state = store.getState()
                    //Пушу обьект в массив с другими постами
                    state.User.posts.push(NewPost)
                    state.User.textareaValue = ''
                    //Тут перерендериваю дерево после добавления поста

                    rerenderTree(store)
                }
                else {
                    alert('Введите текст!!!')
                }



            },
            name: 'Слава',
            avatar: './images/avatar.jpg',
            description: 'Начинающий React-frontend developer',
            profilePhoto: [
                {
                    path: './images/avatar.jpg'
                },
                {
                    path: './images/avatar.jpg'
                },
                {
                    path: './images/avatar.jpg'
                },
                {
                    path: './images/avatar.jpg'
                },
                {
                    path: './images/avatar.jpg'
                },
                {
                    path: './images/avatar.jpg'
                },
            ],
            posts: [
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
                {
                    name: 'Cлава',
                    avatar: './images/avatar.jpg',
                    image: './images/postimg.jpg',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam aut porro est, quod deleniti autem dignissimos iure maxime voluptatum et ea aliquid delectus quaerat cum laudantium omnis? Consequatur amet, exercitationem quae ducimus voluptatibus maxime provident quibusdam impedit fuga porro sunt quos. Quam quibusdam veritatis libero omnis? Quos, est! Pariatur error nisi consequatur nihil voluptatibus esse dolorem cum sed totam maiores minus blanditiis explicabo voluptates, iure doloremque, quidem accusantium ab, est eveniet? Aliquid, autem similique esse aperiam deserunt maiores voluptates maxime fugit repellat omnis tenetur expedita animi accusantium ut eligendi. Animi nihil, reprehenderit consequuntur obcaecati nam qui illo dolorem labore.'
                },
            ]
        },


    },
    _isRegistrated: true,
    //Отвечает за выход и вход в аккаунт
    setRegistrated(status) {
        this._isRegistrated = status
        rerenderTree(store)

    },

    getRegistrated() {
        return this._isRegistrated
    },
    getState() {
        return this._state
    },
    



}



export default store

