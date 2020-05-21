using MyZoo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static MyZoo.Models.Enums;

namespace MyZoo.Models.SampleData
{
    public class MyZooData
    {

        public static List<AnimalModel> defaultZooAnimals = new List<AnimalModel>() {
            new AnimalModel(1,"Ninja",AnimalType.Tiger,"Bengal tiger",1,"Male"),
            new AnimalModel(2,"Felice",AnimalType.Tiger,"Bengal tiger",2,"Female"),
            new AnimalModel(3,"Yulip",AnimalType.Tiger,"Bengal tiger",5,"Female"),
            new AnimalModel(4,"Alice",AnimalType.Tiger,"Bengal tiger",7,"Female"),
            new AnimalModel(5,"Bruce",AnimalType.Tiger,"Bengal tiger",11,"Male"),
            new AnimalModel(6,"Daisy",AnimalType.Lion,"Asiatic lion",2,"Female"),
            new AnimalModel(7,"Pawla",AnimalType.Lion,"Asiatic lion",3,"Female"),
            new AnimalModel(8,"Sanchez",AnimalType.Lion,"Asiatic lion",4,"Male")
        };
    }
}
