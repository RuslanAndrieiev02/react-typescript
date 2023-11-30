import "./styles.css";

function Homework20(){
    let firstName: string = "John";
    let lastName: string = "Doe";
    let job: string = "Sofware Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs: string[]=["JavaScript","Python","Machine Leanrnihg"];
    
    //тут мы делаем меп нашего массива и возврощаем джх элементы
    // с данными из массива
    // 1. Ктото может удалить тип к programLangs и тогда если вы далее не правильно
    // используете programLangs у вас будет ошибка
    //2. Это упрощает дебаг (ловля ошибок)
    // 3. На проектах прописывають жеские файлы с помощью eslint
    // что аргумены  обязанны быть протипизиованны
    // 4. становиться очевидно что за тип 
    // 5. Минимизирует риск ошибок 
    // 6. Типизируем, когда знаем что должно прийти с бэка, однако
    // бэкенд разроботчик накосячит и прислать вам не то что ожидаеться
    // и вы с легкостю словите ошибку

    const newProgramLangs = programLangs.map((el: string)=>{
        return <p key={`${Math.random()}`}>{el}</p>;
    });

    return (
    <div className="Homework20-wrapper">
        <p className="company-personal">Homework20</p>
        <p className="company-persona">{firstName}</p>
        <p className="company-persona">{lastName}</p>
        <p className="company-persona">{job}</p>
        <p className="company-persona">
            {isManager ? "Manager" : "Simple Employee"}
        </p>
        <p className="company-persona">{experience}</p>
        <p className="company-persona">{email}</p>
        {newProgramLangs}
    </div>

    );
}

export default Homework20;