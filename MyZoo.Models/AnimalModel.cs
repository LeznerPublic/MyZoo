using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static MyZoo.Models.Enums;

namespace MyZoo.Models
{
    public class AnimalModel
    {
        public AnimalModel()
        {

        }
        public AnimalModel(int id)
        {
            this.Id = id;
        }

        public AnimalModel(int id, string name, string description, int age)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Age = age;
        }
        public AnimalModel(int id, string name, string type, string description, int age, string gender)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Type = type;
            this.Age = age;
            this.Gender = gender;
        }

        public AnimalModel(int id, string name, AnimalType type, string description, int age, string gender)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Type = type.ToString();
            this.Age = age;
            this.Gender = gender;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
    }
}
