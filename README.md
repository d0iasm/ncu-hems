# 名古屋市立大学芸術工学部実習製作
  
## Tools
* Vagrant 1.9.1
* VirtualBox 4.3.28

* CentOS 7.0_64bit
* Apache 2.4.6 (HTTPサーバ)
* Vsftpd 3.0.2 (FTPサーバ)


## Getting Started

* [Download Vagrant](https://www.vagrantup.com/downloads.html)  
* [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads)  
* `git clone https://github.com/d0iasm/ncu-hems.git`  
* `vagrant up`  

## Accsess  
`vagrant up`をしてから  
http://localhost:8080/  
http://192.168.0.5/  

## FTP送信方法
Cyberduckから接続  
プロトコル:SFTP  
サーバ:`$ ip a`でIPアドレスを調べる（毎回変わる）  
ユーザ名:vagrant  
パスワード:vagrant  
パス:/var/www/html  

コマンド接続  
`$ ftp`  
`$ open`  
`(to) ($ ip aで調べたIPアドレス)`  
`$ (ユーザー名:vagrant)`  
`$ (パスワード:vagrant)`  
`$ put (ファイル名)`  

<!-- サーバー名:localhost.localdomain -->
<!-- ユーザー名:ftp-test -->
<!-- パスワード:ncuhems1357 -->



<!-- ## Using the Source Files -->

## Copyright and License

Use dashboard template [SB Admin 2](http://startbootstrap.com/template-overviews/sb-admin-2/)  
Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/gh-pages/LICENSE) license.
