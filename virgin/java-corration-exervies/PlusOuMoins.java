package degrossir;

import java.lang.System;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int num = -1;
		int mysterious = 0;
		int counter = 12;
		
		do {
			System.out.println("Joueur 1: Veuillez entrer un nombre entre 0 et 1000 !");
			
			if( scan.hasNextInt() ) {
				num = scan.nextInt();
			}else {
				scan.next();
			}
		}
		while( !(num >= 0 && num <= 1000 )  );
		
		mysterious = num;
		num = -1;
		
		do {
			System.out.println("Joueur 2: Essayez de deviner le nombre, nombre de tentatives restantes: " + counter);
			
			if( scan.hasNextInt() ) {
				
				counter--;
				num = scan.nextInt();
				
				if( num < mysterious ) {
					System.out.println("Le nombre mystérieux est plus grand !");
				}else if( num > mysterious ) {
					System.out.println("Le nombre mystérieux est plus petit !");
				}
			}
			else {
				counter--;
				System.out.println("On avait dit un nombre ...");
				scan.next();
			}
		}
		while( num != mysterious && counter > 0 );
		
		
		if( num == mysterious ) {
			System.out.println("Bravo vous avez gagné Joueur 2 !");
		}
		else {
			System.out.println("Bravo vous avez gagné Joueur 1 !");
		}
		
	}

}
