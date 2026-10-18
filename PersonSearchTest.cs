using Common.Data.Models;
using Common.Wpf.ViewModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModuleMobile.UmmsClient;
using System;

namespace Tests
{
    [TestClass]
    public class PersonSearchTest
    {
        [TestMethod]
        public void BirthFemale()
        {
            var request = new PersonSearchModel();
            request.DateOfBirthFrom = new DateTime(1980, 1, 1);
            request.DateOfBirthTo = new DateTime(1980, 1, 31);
            request.Gender = Common.Data.GenderEnum.Female;

            var service = GetService();
            var result = service.SearchPerson(new PersonSearchViewModel(request), 0, Int32.MaxValue);
            Assert.AreEqual(31, result.Count);
        }

        [TestMethod]
        public void BirthFemaleFio()
        {
            var request = new PersonSearchModel();
            request.DateOfBirthFrom = new DateTime(1980, 1, 1);
            request.DateOfBirthTo = new DateTime(1980, 12, 31);
            request.Gender = Common.Data.GenderEnum.Female;
            request.IsNameSelected = true;
            request.Name = "Морозова";

            var service = GetService();
            var result = service.SearchPerson(new PersonSearchViewModel(request), 0, Int32.MaxValue);
            Assert.AreEqual(3, result.Count);
        }

        [TestMethod]
        public void BirthMale()
        {
            var request = new PersonSearchModel();
            request.DateOfBirthFrom = new DateTime(1980, 1, 1);
            request.DateOfBirthTo = new DateTime(1980, 1, 31);
            request.Gender = Common.Data.GenderEnum.Male;

            var service = GetService();
            var result = service.SearchPerson(new PersonSearchViewModel(request), 0, Int32.MaxValue);
            Assert.AreEqual(17, result.Count);
        }

        [TestMethod]
        public void BirthMaleFio()
        {
            var request = new PersonSearchModel();
            request.DateOfBirthFrom = new DateTime(1980, 1, 1);
            request.DateOfBirthTo = new DateTime(1980, 12, 31);
            request.Gender = Common.Data.GenderEnum.Male;
            request.IsNameSelected = true;
            request.Name = "Смирнов";

            var service = GetService();
            var result = service.SearchPerson(new PersonSearchViewModel(request), 0, Int32.MaxValue);
            Assert.AreEqual(7, result.Count);
        }

        [TestMethod]
        public void BirthMaleFioPaging()
        {
            var request = new PersonSearchModel();
            request.DateOfBirthFrom = new DateTime(1980, 1, 1);
            request.DateOfBirthTo = new DateTime(1980, 12, 31);
            request.Gender = Common.Data.GenderEnum.Male;
            request.IsNameSelected = true;
            request.Name = "Смирнов";

            var service = GetService();
            var result1 = service.SearchPerson(new PersonSearchViewModel(request), 1, 4);
            Assert.AreEqual(4, result1.Count);
            var result2 = service.SearchPerson(new PersonSearchViewModel(request), 5, 4);
            Assert.AreEqual(3, result2.Count);
        }

        private Service GetService()
        {
            return new Service("http://<host>:<port>/UmmsNpImplService/UmmsNpImpl?wsdl");
        }
    }
}
