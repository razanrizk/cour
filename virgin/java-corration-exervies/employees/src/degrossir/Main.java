package degrossir;

import java.lang.System;

import degrossir.Employee;

public class Main {

	public static void main(String[] args) {
		
		// nom, sexe, age, poids
		int i = 0;
		
		Employee[] employees = {
				
				new Employee("Julie"	, "F", 40, 50	),
				new Employee("Marc"		, "H", 40, 100	),
				new Employee("Julien"	, "H", 60, 45	),
				new Employee("Anna"		, "F", 60, 60	),
				new Employee("Thierry"	, "H", 80, 55	),
				new Employee("Fran�ois"	, "H", 80, 80	),
				new Employee("Martine"	, "F", 90, 62	)
				
		};
		
		employees = Main.sortEmployees(employees);
		
		for ( i = 0; i < employees.length; i++ ) {
			
			System.out.println(
					employees[i].name +", "+
					employees[i].sex +", "+
					employees[i].age +", "+
					employees[i].weight
			);
			
		}
		
	}
	
	public static Employee[] sortEmployees( Employee[] p_employees ){
		
		int i 				= 0;
		int j 				= 0;
		int max 			= p_employees.length - 1;
		int max2 			= p_employees.length - 1;
		
		Employee current 	= null;
		Employee next 		= null;
		
		
		
		for( i = 0; i < max; i++ ) {
			
			
			for( j = 0; j < max2; j++ ) {
			
				current 		= p_employees[j];
				next 			= p_employees[j+1];
				
				if(
					( current.getSexValue() > next.getSexValue() )
					
						||
						
					( 
						current.getSexValue() == next.getSexValue() && 
						current.age > next.age
					)
					

						||
					
					( 
						current.getSexValue() 	== next.getSexValue() && 
						current.age 			== next.age	  		  &&
						current.weight > next.weight
					)
				) 
				{
					
					p_employees[j+1] 	= current;
					p_employees[j] 		= next;
					
				}
			}
			

			
		}
		
		return p_employees;
		
	}

}
