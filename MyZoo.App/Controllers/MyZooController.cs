using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyZoo.Models;
using MyZoo.Models.SampleData;

namespace MyZoo.App.Controllers
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

        [Route("get-all-animals")]
        [HttpGet]
        public IEnumerable<AnimalModel> GetAllAnimals()
        {
            return allAnimals;
        }

        [HttpGet]
        public IEnumerable<AnimalModel> Get()
        {
            return allAnimals;
        }
    }
}