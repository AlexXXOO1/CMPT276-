module.exports = {
    pg_confog:{
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '123456',
    },
    race:['Asian','Caucasian','African','australasian('],
    sql:{
        $init:`create table if not exists
            student(id serial,
                    name varchar(50),
                    weight int,
                    height int,
                    haircolor varchar(50),
                    eyescolor varchar(50),
                    race varchar(50),
                    gpa decimal(5,2),
                    skin varchar(50))`,
        $insert:`insert into student(name,weight,height,haircolor,eyescolor,race,gpa,skin)
                values($1,$2,$3,$4,$5,$6,$7,$8)`,
        $delete:`delete from student where id = $1`,
        $update:`update student set name = $1,
                weight = $2,
                height = $3,
                haircolor = $4,
                eyescolor = $5,
                race = $6,
                gpa = $7,
                skin = $8
                where id=$9`,
        $select:'select * from student order by id asc',
        $selectOne:'select * from student where id = $1',
    }
}
