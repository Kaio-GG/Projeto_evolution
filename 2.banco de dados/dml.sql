use site;

insert into tb_usuario(nm_usuario, ds_telefone ,ds_email , ds_senha )
		values(  'adm','11 957478957', 'admin@admin.com', '12345' );
        
        
-- CSU01:: efetuar login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email,
       ds_telefone,
       img_usuario
  from tb_usuario;
 where ds_email 		= 'kaiofdss@gmail.com'
   and ds_senha			= '1234';
     
     
 insert into tb_anuncio (nm_anuncio , ds_telefone, ds_valor ,ds_tipo ,ds_descricao )
			values('LG velvet 2', '11 957478957', 1200.00 ,'celular','celular bom ');

select id_anuncio		id,
       nm_anuncio		nome,
       ds_tipo			tipo,
       ds_telefone      telefone,
       img_i
  from tb_anuncio;
 where nm_anuncio 		= 'LG velvet'
   and ds_tipo		    = 'celular';
     
     
update tb_anuncio
set nm_anuncio ='',
	ds_valor=1000.00 ,
	ds_tipo	=''	,
	ds_telefone = '' 
where id_anuncio   