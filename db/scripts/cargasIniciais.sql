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

 -- INSERTS Assentos

		insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(1,'A',6);
		
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(2,'A',7);

		insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(3,'A',8);
        
		insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(4,'A',9);

		Insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(5,'A',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(6,'A',11);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(7,'A',12);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(8,'A',13);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(93,'A',14);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(94,'A',15);
        
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(9,'B',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(10,'B',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(11,'B',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(12,'B',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(13,'B',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(14,'B',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(15,'B',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(16,'B',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(17,'B',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(18,'B',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(19,'B',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(20,'B',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(21,'C',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(22,'C',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(23,'C',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(24,'C',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(25,'C',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(26,'C',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(27,'C',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(28,'C',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(29,'C',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(30,'C',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(31,'C',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(32,'C',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(33,'D',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(34,'D',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(35,'D',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(36,'D',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(37,'D',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(38,'D',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(39,'D',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(40,'D',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(41,'D',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(42,'D',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(43,'D',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(44,'D',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(45,'E',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(46,'E',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(47,'E',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(48,'E',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(49,'E',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(50,'E',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(51,'E',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(52,'E',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(53,'E',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(54,'E',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(55,'E',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(56,'E',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(57,'F',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(58,'F',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(59,'F',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(60,'F',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(61,'F',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(62,'F',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(63,'F',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(64,'F',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(65,'F',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(66,'F',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(67,'F',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(68,'F',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(69,'G',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(70,'G',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(71,'G',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(72,'G',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(73,'G',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(74,'G',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(75,'G',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(76,'G',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(77,'G',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(78,'G',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(79,'G',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(80,'G',15);
        
         insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(81,'H',1);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(82,'H',2);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(83,'H',3);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(84,'H',4);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(85,'H',5);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(86,'H',6);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(87,'H',7);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(88,'H',8);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(89,'H',9);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(90,'H',10);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(91,'H',14);
        
        insert into TB_ASSENTO(ID_ASSENTO, DS_FILEIRA, NR_ASSENTO)
		values(92,'H',15);
 
 
 
 
    
select * from tb_adm;
select * from tb_franquia;
select * from tb_USUARIO;
select * from tb_genero;
select * from tb_SALA;    
select * from tb_HORARIO;

