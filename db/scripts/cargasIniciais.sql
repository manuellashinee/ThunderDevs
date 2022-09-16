use PopcornDB;

-- INSERTS ADMS

insert into TB_ADM(ID_ADM,NM_ADM,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(1,'Matheus','963306065','matheusservulo@hotmail.com','1234','2005-04-02','48597213817','5421065416341');

insert into TB_ADM(ID_ADM,NM_ADM,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(2,'Juliana','970185973','julianafatima5099@gmail.com','1234','2006-03-01','343312272211','53464656354');
    
insert into TB_ADM(ID_ADM,NM_ADM,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(3,'Eliza','948046228','elizaxavier2@gmail.com','1234','2005-09-03','51743901860','64648664564');
    
insert into TB_ADM(ID_ADM,NM_ADM,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(4,'Manuella','985215355','manujesus.vasconcelos@gmail.com','1234','2005-11-21','54405291870','541561541654');
    
-- INSERTS USUARIOS //
 
insert into TB_USUARIO(ID_USUARIO,NM_USUARIO,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(1,'Matheus','963306065','matheusservulo4@Gmail.com','1234','2005-04-02','48597213817','5421065416341');

insert into TB_USUARIO(ID_USUARIO,NM_USUARIO,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(2,'Juliana','970185973','julianafatima5099@hotmail.com','1234','2006-03-01','343312272211','53464656354');
    
insert into TB_USUARIO(ID_USUARIO,NM_USUARIO,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(3,'Eliza','948046228','elizaxavier2@hotmail.com','1234','2005-09-03','51743901860','64648664564');
    
insert into TB_USUARIO(ID_USUARIO,NM_USUARIO,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(4,'Manuella','985215355','manujesus.vasconcelos@hotmail.com','1234','2005-11-21','54405291870','541561541654');
    
-- INSERTS FRANQUIAS //

insert into TB_FRANQUIA(ID_FRANQUIA, NM_FRANQUIA)
	values(1,'Marvel');

insert into TB_FRANQUIA(ID_FRANQUIA, NM_FRANQUIA)
	values(2,'DC');

insert into TB_FRANQUIA(ID_FRANQUIA, NM_FRANQUIA)
	values(3,'Disney');

insert into TB_FRANQUIA(ID_FRANQUIA, NM_FRANQUIA)
	values(4,'Harry Potter');

insert into TB_FRANQUIA(ID_FRANQUIA, NM_FRANQUIA)
	values(5,'Star Wars');
    
-- INSERTS GENEROS //


    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(1,'Comédia');
 
	insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(2,'Terror');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(3,'Romance');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(4,'Ação');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(5,'Aventura');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(6,'Ficção Científica');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(7,'Suspense');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(8,'Drama');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(9,'Documentário');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(10,'Musical');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(11,'Comédia Romântica');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(12,'Dança');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(13,'Mistério');
    
    insert into TB_GENERO(ID_GENERO, NM_GENERO)
	values(14,'Fantasia');
    
 -- INSERTS SALAS   
    
 insert into TB_SALA(ID_SALA, NR_SALA)
	values(1,1);
    
 insert into TB_SALA(ID_SALA, NR_SALA)
	values(2,2);
    
 insert into TB_SALA(ID_SALA, NR_SALA)
	values(3,3);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(4,4);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(5,5);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(6,6);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(7,7);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(8,8);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(9,9);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(10,10);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(11,11);

 insert into TB_SALA(ID_SALA, NR_SALA)
	values(12,12);
    
    
 -- INSERTS HORARIOS
 
 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(1,'13:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(2,'13:30');
 
 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(3,'14:00');
 
 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(4,'14:30');
 
 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(5,'15:00');
 
 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(6,'15:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(7,'16:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(8,'16:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(9,'17:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(10,'17:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(11,'18:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(12,'18:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(13,'19:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(14,'19:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(15,'20:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(16,'20:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(17,'21:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(18,'21:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(19,'22:00');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(20,'22:30');

 insert into TB_HORARIO(ID_HORARIO, DS_HORARIO)
	values(21,'23:00');

 
 
 
 
    
select * from tb_adm;
select * from tb_franquia;
select * from tb_USUARIO;
select * from tb_genero;
select * from tb_SALA;    
select * from tb_HORARIO;

