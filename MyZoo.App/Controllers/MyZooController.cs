using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyZoo.Models;
using MyZoo.Models.SampleData;
using static MyZoo.Models.Enums;

namespace MyZoo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyZooController : ControllerBase
    {
        private static List<AnimalModel> allAnimals;

        private readonly ILogger<MyZooController> _logger;


        public MyZooController(ILogger<MyZooController> logger)
        {
            _logger = logger;
            allAnimals = MyZooData.defaultZooAnimals;
        }

        [HttpGet]
        public string Get()
        {
            return "Welcome to MyZoo.API";
        }

        /// <summary>
        /// https://localhost:44336/api/myzoo/get-all-animals
        /// </summary>
        /// <returns></returns>
        [Route("get-all-animals")]
        [HttpGet]
        public IEnumerable<AnimalModel> GetAllAnimals()
        {
            return allAnimals;
        }

        [Route("get-animal-types")]
        [HttpGet]
        public IEnumerable<AnimalTypeModel> GetAnimalTypes()
        {
            return Enum.GetValues(typeof(AnimalType))
                    .Cast<AnimalType>()
                    .Select(v => new AnimalTypeModel() { Key = v.ToString(), Value = v.ToString() })
                    .ToList();
        }

        [Route("get-statistics-by-type")]
        [HttpGet]
        public IEnumerable<StatisticModel> GetStatisticsByType()
        {
            return allAnimals.GroupBy(x => x.Type).Select(x => new StatisticModel() { Key = x.Key, Value = x.Count() }).ToList();
        }

        [Route("get-statistics-by-gender")]
        [HttpGet]
        public IEnumerable<StatisticModel> GetStatisticsByGender()
        {
            return allAnimals.GroupBy(x => x.Gender).Select(x => new StatisticModel() { Key = x.Key, Value = x.Count() }).ToList();
        }

        [Route("get-statistics-by-age")]
        [HttpGet]
        public IEnumerable<StatisticModel> GetStatisticsByAge()
        {
            return allAnimals.GroupBy(x => x.Age).Select(x => new StatisticModel() { Key = x.Key.ToString(), Value = x.Count() }).ToList();
        }

        [Route("add-animal")]
        [HttpPost]
        public IEnumerable<AnimalModel> AddAnimal([FromBody] AnimalModel animal)
        {
            var newId = (allAnimals.Select(x => x.Id).Max()) + 1;
            animal.Id = newId;
            allAnimals.Add(animal);
            return allAnimals;
        }

        [Route("delete-animal")]
        [HttpPost]
        public IEnumerable<AnimalModel> DeleteAnimal([FromBody] AnimalModel animal)
        {
            var animalToDelete = allAnimals.Where(x => x.Id == animal.Id).FirstOrDefault();
            if (animalToDelete != null)
            {
                allAnimals.Remove(animalToDelete);
            }
            return allAnimals;
        }

        [Route("update-animal")]
        [HttpPost]
        public IEnumerable<AnimalModel> UpdateAnimal([FromBody] AnimalModel animal)
        {
            var animalToUpdate = allAnimals.Where(x => x.Id == animal.Id).FirstOrDefault();
            if (animalToUpdate != null)
            {
                animalToUpdate.Name = animal.Name;
                animalToUpdate.Description = animal.Description;
                animalToUpdate.Age = animal.Age;
            }
            return allAnimals;
        }


    }
}