package degrossir;

import java.lang.System;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		int age = 0;
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Veuillez nous donner votre �ge");
		
		if( scan.hasNextInt() ) {
			
			age = scan.nextInt();
			System.out.println("Votre �ge est : " + age);
			
		}
		else {
			System.out.println("Age invalide");
		}
	
		
	}

}
