## Графика и данные (next chartjs)
yarn run dev

## info 
в data.js генерируются данные по типу:
[{
id: ,
personal_id,
name: ,
answers:[
    {
    id,
    name,
    type, (0 || 1)
    low,
    high,
    median,
    }
    ]
}]

На клиенте в layout 3 раздела, [Общая информация, Задача 1, Задача 2]
Кликаем на ссылки, попадаем на странички, задача 1, задача 2 - отображают свои данные(по полю type), а “Общая информация” сумму по всем данным
На каждой страничке по присылаемым данным строятся 2 графика.
1) Вывод на графике по полям (low+high)/2 сколько таких записей попадает в [0..2, 2..4, 4..6, 6..8, 8..10] (интересует только количество) (тип графика любой на выбор)
2) Вывод всех медиан на график, в любом порядке с подписями по name

