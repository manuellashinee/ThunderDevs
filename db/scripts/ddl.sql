
create database PopcornDB;
use PopcornDB;


create table TB_ADM(
	ID_ADM  		INT PRIMARY KEY AUTO_INCREMENT,
    NM_ADM 			VARCHAR(200),
    DS_TELEFONE 	VARCHAR(15),
    DS_EMAIL		VARCHAR(100),
    DS_SENHA 		VARCHAR(200),
    DT_NASCIMENTO  	DATE,
    DS_CPF 			VARCHAR(50),
    DS_RG 			VARCHAR(50)
);

create table TB_CARROSSEL(
	ID_CARROSSEL 	INT primary KEY AUTO_INCREMENT,
    IMG_CARROSSEL 	VARCHAR(5000)
);

create table TB_USUARIO(
	ID_USUARIO  	INT PRIMARY KEY AUTO_INCREMENT,
    NM_USUARIO 		VARCHAR(200),
    DS_TELEFONE 	VARCHAR(15),
    DT_NASCIMENTO  	DATE,
    DS_EMAIL		VARCHAR(100),
    DS_SENHA 		VARCHAR(200),
    DS_CPF 			VARCHAR(50),
    DS_RG 			VARCHAR(50)
);

create table TB_COMBO(
	ID_COMBO 	INT PRIMARY KEY AUTO_INCREMENT,
    NM_COMBO	VARCHAR(200),
    DS_COMBO 	VARCHAR(200),
    VL_PRECO 	DECIMAL(15,2),
    IMG_COMBO 	VARCHAR(5000)
);

create table TB_PAGAMENTO_COMBO(
	ID_PAGAMENTO_COMBO 		INT PRIMARY KEY AUTO_INCREMENT,
    NR_CARTAO 				INT,
    DT_VENCIMENTO_CARTAO 	DATE,
    DS_CVV 					VARCHAR(3),
    NM_CARTAO 				VARCHAR(50),
    DS_BANDEIRA_CARTAO 		VARCHAR(50),
    DS_FORMA_PAGAMENTO		VARCHAR(10)
);

create table TB_PEDIDO_COMBO(
	ID_PEDIDO_COMBO 	INT PRIMARY KEY AUTO_INCREMENT,
    ID_USUARIO 			INT,
    ID_COMBO 			INT,
    ID_PAGAMENTO_COMBO 	INT,
    DT_PEDIDO 			DATE,
    DS_STATUS			VARCHAR(200),
    VL_TOTAL 			DECIMAL(15,2),
    
    foreign key (ID_USUARIO) references  TB_USUARIO(ID_USUARIO),
    foreign key (ID_COMBO) references TB_COMBO(ID_COMBO),
    foreign key (ID_PAGAMENTO_COMBO) references TB_PAGAMENTO_COMBO(ID_PAGAMENTO_COMBO)
);

create table TB_FRANQUIA(
	ID_FRANQUIA 	INT primary key auto_increment,
    NM_FRANQUIA		VARCHAR(50)
);

create table TB_GENERO(
	ID_GENERO	INT primary key auto_increment,
    NM_GENERO	VARCHAR(50)
);

create table TB_FILME(
	ID_FILME 			INT primary key auto_increment,
	ID_FRANQUIA         INT,
	ID_GENERO           INT,
    NM_FILME            VARCHAR(50),
	NR_DURACAO          INT ,
	NR_CLASSIFICACAO    INT,
	DT_LANCAMENTO       DATE,
	NM_ATOR             VARCHAR(50),
	NR_TOMATO_METER     INT,
	NR_AUDIENCE_SCORE   INT,
	DS_SINOPSE          VARCHAR(600),
	IMG_CAPA            VARCHAR(5000),
	NM_DIRETOR          VARCHAR(100),
	VL_AVALIACAO        DECIMAL(10,1),
	BT_DESTAQUE         BOOL,
	DS_SITUACAO         varchar(50),
    
    foreign key (ID_FRANQUIA) references  TB_FRANQUIA(ID_FRANQUIA),
    foreign key (ID_GENERO) references  TB_GENERO(ID_GENERO)
);

create table TB_COMENTARIO(
	ID_COMENTARIO 		INT primary key auto_increment,
    ID_FILME            INT,
	ID_USUARIO         	INT,
	DS_FRASE           	VARCHAR(100),
	NR_AVALIACAO        INT,
	
    foreign key (ID_FILME) references TB_FILME(ID_FILME),
    foreign key (ID_USUARIO) references TB_USUARIO(ID_USUARIO)
);

create table TB_HORARIO(
	ID_HORARIO		INT primary key auto_increment,
    DS_HORARIO		VARCHAR(50)
);

create table TB_SALA(
	ID_SALA 	INT primary key auto_increment,
    NR_SALA		INT
);

create table TB_SALA_HORARIO(
	ID_SALA_HORARIO		INT primary key auto_increment,
    ID_SALA 			INT,
    ID_HORARIO			INT,
    
    foreign key (ID_SALA) references TB_SALA(ID_SALA),
    foreign key (ID_HORARIO) references TB_HORARIO(ID_HORARIO)
);

create table TB_FILME_SALA(
	ID_FILME_SALA		INT primary key auto_increment,
    ID_SALA 			INT,
    ID_FILME			INT,
    DT_DE 				DATE,
    DT_ATE 				DATE,
    
   foreign key (ID_SALA) references TB_SALA(ID_SALA),
   foreign key (ID_FILME) references TB_FILME(ID_FILME)
);

create table TB_FILME_SALA_HORARIO(
	ID_FILME_SALA_HORARIO		INT primary key auto_increment,
    ID_SALA_HORARIO 			INT,
    ID_FILME_SALA				INT,
    
   foreign key (ID_SALA_HORARIO) references TB_SALA_HORARIO(ID_SALA_HORARIO),
   foreign key (ID_FILME_SALA) references TB_FILME_SALA(ID_FILME_SALA)
);

create table TB_PAGAMENTO_FILME(
	ID_PAGAMENTO_FILME 		INT PRIMARY KEY AUTO_INCREMENT,
    NR_CARTAO 				INT,
    DT_VENCIMENTO_CARTAO 	DATE,
    DS_CVV 					VARCHAR(3),
    NM_CARTAO 				VARCHAR(50),
    DS_BANDEIRA_CARTAO 		VARCHAR(50),
    NR_PARCELAS             INT,
    DS_FORMA_PAGAMENTO		VARCHAR(10)
);

create table TB_ASSENTO(
	ID_ASSENTO 		INT primary key auto_increment,
    DS_FILEIRA 		VARCHAR(20),
    NR_ASSENTO 		INT
);

create table TB_INGRESSO(
	ID_INGRESSO 		INT primary key auto_increment,
    ID_USUARIO 			INT,
    ID_PAGAMENTO_FILME	INT,
    ID_FILME 			INT,
    NR_INTEIRAS         INT,
	NR_MEIAS            INT,
	VL_TOTAL            DECIMAL(15,2),
	DS_STATUS           BOOL,
	DT_PEDIDO           DATE,
	DT_EXIBICAO         DATE,
	DS_HORARIO          VARCHAR(50),
	NR_SALA             INT,
    
    foreign key (ID_USUARIO) references TB_USUARIO(ID_USUARIO),
    foreign key (ID_PAGAMENTO_FILME) references TB_PAGAMENTO_FILME(ID_PAGAMENTO_FILME),
    foreign key (ID_FILME) references TB_FILME(ID_FILME)
);

create table TB_INGRESSO_ASSENTO(
	ID_INGRESSO_ASSENTO 		INT primary key auto_increment,
    ID_ASSENTO 					INT,
    ID_INGRESSO 				INT,
    
    foreign key (ID_ASSENTO) references TB_ASSENTO(ID_ASSENTO),
    foreign key (ID_INGRESSO) references TB_INGRESSO(ID_INGRESSO)
);