<template>
    <div>
        <Header />
        <div>
            <div class="breadcrumbs">
                <h4>
                    {{ forum }}
                </h4>
                <p>
                    Модераторы
                </p>
                <div class="pagination">
                    <span>
                        Страницы:
                    </span>
                    <div v-if="distributtions.length >= distributtionsPerPage">
                        <span v-for="distributtion in Math.floor(distributtions.length / distributtionsPerPage) + 1" :key="distributtion._id" @click="currentPage = distributtion" :class="{ activePage: distributtion === currentPage }">
                            {{ distributtion }}
                        </span>
                    </div>
                    <div v-else>
                        <span :class="{ activePage: true }">
                            1
                        </span>
                    </div>
                    <span @click="currentPage < Math.floor(distributtions.length / distributtionsPerPage) + 1 ? currentPage++ : currentPage = currentPage">
                        След
                    </span>
                </div>
                <div>
                    <img class="createThemeBtn" @click="$router.push({ name: 'AgreementDistributtion', query: { distributtionforum: forum } })" src="https://static.t-ru.org/templates/v1/images/post.gif" alt="">
                    <span>
                        Новости » Новости трекера » {{ forum }}
                    </span>
                </div>
            </div>
            <div>
                <div class="tableHeader">
                    <span>
                        Подписка
                    </span>
                    <span>
                        Мои сообщения
                    </span>
                    <span>
                        Начатые темы
                    </span>
                    <span>
                        Опции показа
                    </span>
                    <input type="text" class="form-control w-25">
                    <button>
                        по разделу
                    </button>
                    <button>
                        по подразд.
                    </button>
                </div>
                <div class="sortHeader">
                    <div class="idSort">
                        <span>
                            &nbsp;
                        </span>
                    </div>
                    <div class="topicsSort">
                        <span>
                            Темы
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            Ответов
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            Автор
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <span>
                            Посл. сообщение
                        </span>
                    </div>
                </div>
                <div class="section">
                    <span>
                        Объявления
                    </span>
                </div>
                <!-- <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_announce.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_announce.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id" class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_sticky.gif" alt="">
                    </div>
                    <div class="topicsSort" @click="$router.push({ name: 'Distribution', query: { distributtionid: distributtion._id } })">
                        <span>
                            {{ distributtion.theme }}
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            {{
                               distributtion.posts[distributtion.posts.length - 1] ?
                                distributtion.posts.length
                               :
                                0
                            }}
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            {{ distributtion.authorName }}
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div v-if="distributtion.posts[distributtion.posts.length - 1]">
                            <span>
                                {{ distributtion.posts[distributtion.posts.length - 1]['message'] }}
                            </span>
                            <br/>
                            <span>
                                {{ `${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[2]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[1]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[0]} ${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[0]}:${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[1]}` }}
                                by
                                {{ distributtion.posts[distributtion.posts.length - 1]['author'] }}
                            </span>
                        </div>
                        <span v-else>
                            Сообщений нет
                        </span>
                    </div>
                </div>
                <div class="section">
                    <span>
                        Прилеплены
                    </span>
                </div>
                <!-- <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_sticky.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_sticky.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_sticky.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_sticky.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id" class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder_announce.gif" alt="">
                    </div>
                    <div @click="$router.push({ name: 'Distribution', query: { distributtionid: distributtion._id } })" class="topicsSort">
                        <span>
                            {{ distributtion.theme }}
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            {{
                               distributtion.posts[distributtion.posts.length - 1] ?
                                distributtion.posts.length
                               :
                                0
                            }}
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            {{ distributtion.authorName }}
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div v-if="distributtion.posts[distributtion.posts.length - 1]">
                            <span>
                                {{ distributtion.posts[distributtion.posts.length - 1]['message'] }}
                            </span>
                            <br/>
                            <span>
                                {{ `${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[2]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[1]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[0]} ${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[0]}:${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[1]}` }}
                                by
                                {{ distributtion.posts[distributtion.posts.length - 1]['author'] }}
                            </span>
                        </div>
                        <span v-else>
                            Сообщений нет
                        </span>
                    </div>
                </div>
                <div class="section">
                    <span>
                        Темы
                    </span>
                </div>
                <!-- <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div>
                <div class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort">
                        <span>
                            Путеводитель по разделу "Антикварные раздачи"
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            0
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            mpv777
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div>
                            <span>
                                2012-07-15 18:20
                            </span>
                            <br/>
                            <span>
                                mpv777	»
                            </span>
                        </div>
                    </div>
                </div> -->
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id" class="sortHeader dataRow">
                    <div class="idSort">
                        <img width="25px" src="https://static.t-ru.org/templates/v1/images/folder.gif" alt="">
                    </div>
                    <div class="topicsSort" @click="$router.push({ name: 'Distribution', query: { distributtionid: distributtion._id } })">
                        <span>
                            {{ distributtion.theme }}
                        </span>
                    </div>
                    <div class="answersSort">
                        <span>
                            {{
                               distributtion.posts[distributtion.posts.length - 1] ?
                                distributtion.posts.length
                               :
                                0
                            }}
                        </span>
                    </div>
                    <div class="authorSort">
                        <span>
                            {{ distributtion.authorName }}
                        </span>
                    </div>
                    <div class="lastMessageSort">
                        <div v-if="distributtion.posts[distributtion.posts.length - 1]">
                            <span>
                                {{ distributtion.posts[distributtion.posts.length - 1]['message'] }}
                            </span>
                            <br/>
                            <span>
                                {{ `${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[2]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[1]}-${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[0].split('-')[0]} ${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[0]}:${distributtion.posts[distributtion.posts.length - 1]['date'].split(' ')[1].split(':')[1]}` }}
                                by
                                {{ distributtion.posts[distributtion.posts.length - 1]['author'] }}
                            </span>
                        </div>
                        <span v-else>
                            Сообщений нет
                        </span>
                    </div>
                </div>
                <div class="sortBy">
                    <span>
                        Упорядочить по:
                    </span>
                    <select v-model="condition">
                        <option value="Россия">Посл. сообщение</option>
                        <option value="Украина">Название темы</option>
                        <option value="Беларусь">Время размещения</option>
                    </select>
                    <select v-model="asc">
                        <option value="Россия">по возрастанию</option>
                        <option value="Украина">по убыванию</option>
                    </select>
                    <button>
                        Перейти
                    </button>
                </div>
                <div class="breadcrumbs">
                    <div>
                        <img class="createThemeBtn" @click="$router.push({ name: 'AgreementDistributtion', query: { distributtionforum: forum } })" src="https://static.t-ru.org/templates/v1/images/post.gif" alt="">
                        <span>
                            Главная » Новости » Новости трекера » {{ forum }}
                        </span>
                    </div>
                    <div class="pages">
                        <p>
                            Страница {{ currentPage }} из {{ distributtions.length >= distributtionsPerPage ? Math.floor(distributtions.length / distributtionsPerPage) + 1 : '1'}}
                        </p>
                        
                        <div class="pagination">
                            <span>
                                Страницы:
                            </span>
                            <div v-if="distributtions.length >= distributtionsPerPage">
                                <span v-for="distributtion in Math.floor(distributtions.length / distributtionsPerPage) + 1" :key="distributtion._id" @click="currentPage = distributtion" :class="{ activePage: distributtion === currentPage }">
                                    {{ distributtion }}
                                </span>
                            </div>
                            <div v-else>
                                <span :class="{ activePage: true }">
                                    1
                                </span>
                            </div>
                            <span @click="currentPage < distributtions.length / distributtionsPerPage ? currentPage++ : currentPage = currentPage">
                                След
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Distributtions',
    data(){
        return {
            condition: true,
            asc: true,
            forum: 'Авторские раздачи',
            distributtions: [],
            currentPage: 1,
            distributtionsPerPage: 3,
            authors: [],
            token: window.localStorage.getItem("torrentiotoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'torrentiosecret', (err, decoded) => {
            if (err) {
                this.loginToggler = true
                this.isLogin = false
            } else {
                fetch(`http://localhost:4000/api/torrenters/get/?torrenterid=${decoded.torrenter}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                    if(JSON.parse(result).status.includes('OK')){
                        this.torrenter = JSON.parse(result).torrenter
                        this.forum = this.$route.query.distributtionforum
                        
                        fetch(`http://localhost:4000/api/distributtions/fromforum/?distributtionsforum=${this.forum}`, {
                            mode: 'cors',
                            method: 'GET'
                        }).then(response => response.body).then(rb  => {
                            const reader = rb.getReader()
                            return new ReadableStream({
                                start(controller) {
                                    function push() {
                                        reader.read().then( ({done, value}) => {
                                            if (done) {
                                                console.log('done', done);
                                                controller.close();
                                                return;
                                            }
                                            controller.enqueue(value);
                                            console.log(done, value);
                                            push();
                                        })
                                    }
                                    push();
                                }
                            });
                        }).then(stream => {
                            return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                        })
                        .then(result => {
                            if(JSON.parse(result).status.includes('OK')){
                                console.log(`JSON.parse(result).distributtions: ${Object.values(JSON.parse(result).distributtions[0])}`)
                                this.distributtions = JSON.parse(result).distributtions
                            } else if(JSON.parse(result).status.includes('Error')){
                            
                            }
                        })
                    } else if(JSON.parse(result).status.includes('Error')){
                        
                    }
                })
            }
        })
    },
    methods: {
        getTorrenter(authorId) {
            fetch(`http://localhost:4000/api/torrenters/get/?torrenterid=${authorId}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if(JSON.parse(result).status.includes('OK')){
                    console.log(`JSON.parse(result).torrenter.name: ${JSON.parse(result).torrenter.name}`)
                    return `${JSON.parse(result).torrenter.name.toString()}`
                } else if(JSON.parse(result).status.includes('Error')){
                    return authorId
                }
            })
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .breadcrumbs {
        color: rgb(0, 0, 255);
    }

    .tableHeader {
        display: flex;
        height: 50px;
        background-color: rgb(225, 225, 225);
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-end;
        align-items: center;
    }

    .tableHeader > * {
        margin: 0px 5px;
        font-size: 12px;
    }

    .sortHeader {
        background-color: rgb(200, 200, 200);
        height: 35px;
        display: flex;
    }

    .sortHeader > div {
        justify-content: center; 
        align-items: center;
        display: flex;
        border: 1px solid rgb(175, 175, 175);
    }
   
    .topicsSort {
        width: 50%;
    }

    .answersSort {
        width: 15%;
    }

    .authorSort {
        width: 15%;
    }

    .lastMessageSort {
        width: 15%;
    }

    .idSort {
        width: 5%;
    }

    .section {
        background-color: rgb(200, 200, 200);
        height: 35px;
        font-weight: bolder;
    }

    .section > * {
        margin-left: 15px;
    }

    .dataRow {
        background-color: rgb(225, 225, 225);
        height: 65px;
    }

    .idSort > img {
        align-self: center;
    }

    .dataRow > .topicsSort > span {
        font-weight: bolder;
        cursor: pointer;
    }

    .dataRow > .authorSort > span {
        text-decoration: underline;
    }

    .dataRow > .authorSort > span, .dataRow > .topicsSort > span {
        color: rgb(0, 0, 255);
    }

    .sortBy {
        height: 35px;
        background-color: rgb(215, 215, 215);
    }

    .pages {
        display: flex;
        justify-content: space-between;
    }

    .createThemeBtn {
        cursor: pointer;
    }

    .pagination {
        color: rgb(100, 100, 250);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
    }

    .pagination > span {
        margin: 0px 2px;
    }

    .activePage {
        color: rgb(200, 100, 0);
    }

</style>